const navScrollTo = (e) => {
  e.preventDefault();
  const elId = e.target.dataset.id;
  console.log("elid", elId);
  const targetEl = document.querySelector(`#${elId}`);
  const scrollIntoViewOptions = {
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  };
  targetEl.scrollIntoView(scrollIntoViewOptions);
};

const toggleMenu = (e) => {
  const el = document.querySelector('[data-id="mobileMenu"]');
  console.log(el);
  el.classList.toggle("hidden");
};

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-3xl lg:max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="float-left md:float-right pr-2 pt-6 z-10 text-4xl font-extrabold text-blue-500 hidden md:block">
            Big Sky Handyman
          </div>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-auto sm:h-10"
                      viewBox="0 0 512 512"
                    >
                      <title>Home</title>
                      <path
                        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                        fill="lightgray"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                      <path
                        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                        fill="lightgray"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                    </svg>
                  </a>
                  <div className="md:hidden text-3xl font-extrabold text-blue-500">
                    Big Sky Handyman
                  </div>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      id="main-menu"
                      aria-haspopup="true"
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a
                  href="/"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={navScrollTo}
                  data-id="contact"
                  className="font-medium text-gray-500 hover:text-gray-900"
                  role="menuitem"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>

          {/*
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
          */}
          <div
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
            data-id="mobileMenu"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-auto sm:h-10"
                      viewBox="0 0 512 512"
                    >
                      <title>Home</title>
                      <path
                        d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                        fill="lightgray"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                      <path
                        d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                        fill="lightgray"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                    </svg>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close main menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    onClick={navScrollTo}
                    data-id="contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Contact Us
                  </a>

                  {/* <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Company
                  </a> */}
                </div>
                {/* <div role="none">
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-blue-500 bg-gray-50 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-3xl lg:max-w-7xl px-4 pt-4 md:pt-0 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">We have the </span>
                <span className="block text-blue-500 xl:inline" data-id="what">
                  skills
                </span>
                <span className="block xl:inline"> to enrich </span>
                <span className="block text-blue-500 xl:inline" data-id="where">
                  your home
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                David is a proven professional with construction and maintenance
                experience in both commercial and residential properties for
                more than 20 years. He can provide the know-how and the skills
                to build or fix damn near anything you throw at him. Just make
                sure to yell "Heads Up!" before you throw it.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:max-w-lg">
                Use the form below to send us some details about your needs and
                we'll get back to you as soon as we can.
              </p>
              {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="lg:hidden xl:block h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/IMG_1856.jpeg"
          alt=""
        ></img>
        <img
          className="hidden lg:block xl:hidden h-56 w-full object-contain object-right sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/IMG_1856_crop_lg.jpeg"
          alt=""
        ></img>
      </div>
    </div>
  );
}
