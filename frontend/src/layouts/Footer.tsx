export default function Footer() {
  return (
    <>
      <footer className="bg-gray-300 px-6 sm:px-10 py-10 flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-10 text-center md:text-left">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            className="h-[8vmin] max-h-[60px] w-auto"
            src="../../src/images/images-home/logo_2.png"
            alt="InventoryPRO Logo"
          />
        </div>

        {/* Links principales */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center md:justify-start w-full md:w-auto">
          {/* Solutions */}
          <div>
            <h3 className="mb-1 text-xl sm:text-2xl font-bold">Solutions</h3>
            <ul className="list-none leading-7 p-0">
              {["Small Business", "Freelancers", "Customers", "Taxes"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      className="block text-gray-700 border-2 border-transparent no-underline hover:text-black hover:border-black text-base sm:text-lg transition"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-1 text-xl sm:text-2xl font-bold">Company</h3>
            <ul className="list-none leading-7 p-0">
              {["About Us", "Career", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    className="block text-gray-700 border-2 border-transparent no-underline hover:text-black hover:border-black text-base sm:text-lg transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="mb-1 text-xl sm:text-2xl font-bold">Learn</h3>
            <ul className="list-none leading-7 p-0">
              {["Blog", "EBooks", "Guides", "Templates"].map((item, i) => (
                <li key={i}>
                  <a
                    className="block text-gray-700 border-2 border-transparent no-underline hover:text-black hover:border-black text-base sm:text-lg transition"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social + Apps */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <h3 className="text-lg italic mb-2">Follow us!!</h3>
          <div className="flex gap-5 justify-center">
            <a href="#">
              <img
                className="w-[28px] sm:w-[32px] hover:scale-110 transition"
                src="../../src/images/images-home/face_log.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                className="w-[28px] sm:w-[32px] hover:scale-110 transition"
                src="../../src/images/images-home/twi_log.png"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                className="w-[28px] sm:w-[32px] hover:scale-110 transition"
                src="../../src/images/images-home/inst_log.png"
                alt="Instagram"
              />
            </a>
          </div>

          <h3 className="mt-4 text-lg italic">Get the App</h3>
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 items-center md:items-end mt-2">
            <a href="#">
              <img
                className="w-[130px] sm:w-[150px] hover:opacity-90 transition"
                src="../../src/images/images-home/get-google.png"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img
                className="w-[130px] sm:w-[150px] hover:opacity-90 transition"
                src="../../src/images/images-home/get-apps.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
