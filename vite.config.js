import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const submissionsDir = path.join(__dirname, 'submissions')
const submissionsFile = path.join(submissionsDir, 'contact-submissions.json')

function contactSubmissionPlugin() {
  const handler = async (req, res, next) => {
    if (req.method !== 'POST' || req.url !== '/api/contact') {
      return next()
    }

    let body = ''

    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}')
        const record = {
          id: `lead-${Date.now()}`,
          submittedAt: new Date().toISOString(),
          ...payload,
        }

        await mkdir(submissionsDir, { recursive: true })

        let existing = []

        try {
          const fileContents = await readFile(submissionsFile, 'utf8')
          existing = JSON.parse(fileContents)
          if (!Array.isArray(existing)) {
            existing = []
          }
        } catch (error) {
          if (error.code !== 'ENOENT') {
            throw error
          }
        }

        existing.push(record)
        await writeFile(submissionsFile, JSON.stringify(existing, null, 2))

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ success: true, record }))
      } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(
          JSON.stringify({
            success: false,
            message: 'Unable to save contact request.',
          }),
        )
      }
    })
  }

  return {
    name: 'contact-submission-plugin',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactSubmissionPlugin()],
})
