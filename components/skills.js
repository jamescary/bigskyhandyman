export default function Skills() {
  return (
    <div className="py-12 relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-500 dark:text-blue-200 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            We can do (almost) anything
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-200 lg:mx-auto">
            We have experience doing all sorts of odd jobs. If your job is too
            big or you haven't got the tools, just give us a call!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white dark:text-gray-200">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Construct</title>
                    <path
                      d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="round"
                      strokeWidth="32"
                    />
                    <path
                      d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="round"
                      strokeWidth="32"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Installation and repair
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-200">
                  Drywall, brick, stone, tile, and wood. We can install, repair,
                  patch, fix, texture and remodel it all!
                </dd>
              </div>
            </div>

            {/* <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Home</title>
                    <path
                      d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="round"
                      strokeWidth="32"
                    />
                    <path
                      d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="round"
                      strokeWidth="32"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Home Remodeling and Heavy Lifting
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-200">
                  We've remodeled kitchens and bathrooms all over the United States. 
                  Whether you want all new cabinets, countertops, and appliances: we can make your vision into reality.
                  Closet systems galore, we can help you organize your life.
                  Assembling furniture and installing bookshelves, sorting out garage or backyard storage. 
                </dd>
              </div>
            </div> */}

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <title>Thermometer</title>
                    <path
                      d="M307.72 302.27a8 8 0 01-3.72-6.75V80a48 48 0 00-48-48h0a48 48 0 00-48 48v215.52a8 8 0 01-3.71 6.74 97.51 97.51 0 00-44.19 86.07A96 96 0 00352 384a97.49 97.49 0 00-44.28-81.73zM256 112v272"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <circle cx="256" cy="384" r="48" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Appliance Installation
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-200">
                  Thermostats to refrigerators, we can install your appliances,
                  and if you finally need that beautiful rain shower and soaking
                  tub, we can beautify your abode.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 512 512"
                  >
                    <title>Water</title>
                    <path
                      d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                    <path
                      d="M344 328a72 72 0 01-72 72"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                  Pressure Cleaning, Painting, Weather Proofing
                </dt>
                <dd className="mt-2 text-base text-gray-500 dark:text-gray-200">
                  Oil-stained driveways, weather-worn patios, and faded paint
                  are no good! We have the know-how and the tools to remedy the
                  situation and make your home beautiful inside and out. We can
                  also repair water damage and make your home look just as good
                  as it did before that pipe burst!
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
