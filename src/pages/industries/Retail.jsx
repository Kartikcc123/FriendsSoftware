export default function Retail() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#06081E] mb-4">Retail</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Omnichannel storefronts, loyalty solutions, and retail analytics tools.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#e8f0fe] flex flex-col md:flex-row">
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2">Featured Project</span>
          <h2 className="text-3xl font-bold text-[#06081E] mb-4">Salasar Tea Company</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            A modern, performant e-commerce storefront template built with React and Vite. Designed for premium retail brands that require fast loading times, seamless user experiences, and highly customizable frontend architecture.
          </p>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h3 className="font-bold text-green-800 mb-2 text-lg">What it does</h3>
            <p className="text-green-700">
              It provides a highly interactive and visually appealing shopping environment for retail customers. The project serves as the digital foundation for a tea company to display products, handle cart interactions, and drive online sales.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 bg-[#f8fbff]">
          <img src="/tea_retail.png" alt="Salasar Tea Company Storefront" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
