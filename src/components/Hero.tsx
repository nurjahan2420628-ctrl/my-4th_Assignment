import bannerStack from "../assets/banner-stack.png";
function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-24"
    >
      
      <div>
        

        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />

          <span className="brand-gradient-text">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
          Explore frontend, backend, database, and tooling
options, compare them side by side, and put together
the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-gradient rounded-full px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>

      
      <div className="flex justify-center lg:justify-end">
       

        <img
          src={bannerStack}
          alt="Dev Stack"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;