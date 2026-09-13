function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="flex items-center gap-2"
            >
              
              <img
                src="./src/assets/logo-text.png"
                alt="Dev Stack"
                className="h-9 w-30 object-contain"
              />

             
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>

           
            <div className="mt-5 flex gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-gray-600 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-gray-600 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-gray-600 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="font-bold text-gray-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#home">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
              
            </div>
          </div>

       
          <div>
            <h3 className="font-bold text-gray-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#home">Careers</a>
            </div>
          </div>

         
          <div>
            <h3 className="font-bold text-gray-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              
            </div>
          </div>
        </div>

     
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;