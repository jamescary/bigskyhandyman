const handleSubmit = (event) => {
  // event.preventDefault();
  const el = document.querySelector('[data-id="submitSuccess"]');
  el.classList.remove("hidden");
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl xl:max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 py-0 xl:py-20">
      <form
        name="contact"
        id="contact"
        method="POST"
        // netlify-honeypot="bot-field"
        data-netlify="true"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="text-3xl font-bold sm:text-4xl dark:text-gray-200">
          Contact Us
        </h2>
        <div className="mt-8 max-w-screen-xl">
          <div className="grid grid-cols-1 gap-6">
            <label className="block" htmlFor="yourname">
              <span className="text-gray-700 dark:text-gray-200">
                Full name
              </span>
              <input
                type="text"
                name="name"
                id="yourname"
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-600 border-transparent focus:border-gray-500 dark:focus:border-gray-700 focus:bg-white dark:focus:bg-gray-500 focus:ring-0 dark:text-gray-200"
                placeholder=""
              />
            </label>
            <label className="block" htmlFor="youremail">
              <span className="text-gray-700 dark:text-gray-200">
                Email address
              </span>
              <input
                type="email"
                name="email"
                id="youremail"
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-600 border-transparent focus:border-gray-500 dark:focus:border-gray-700 focus:bg-white dark:focus:bg-gray-500 focus:ring-0 dark:text-gray-200 dark:placeholder-gray-200 "
                placeholder="john@example.com"
              />
            </label>
            <label className="block" htmlFor="yourphone">
              <span className="text-gray-700 dark:text-gray-200">
                Phone number
              </span>
              <input
                type="tel"
                name="phone"
                id="yourphone"
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-600 border-transparent focus:border-gray-500 dark:focus:border-gray-700 focus:bg-white dark:focus:bg-gray-500 focus:ring-0 dark:text-gray-200 dark:placeholder-gray-200"
                placeholder="(512) 555-9999"
              />
            </label>
            <label className="block" htmlFor="dateRequested">
              <span className="text-gray-700 dark:text-gray-200">
                When do you need it done?
              </span>
              <input
                type="date"
                name="serviceDate"
                id="dateRequested"
                data-input="date"
                placeholder="mm/dd/yyyy"
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-600 border-transparent focus:border-gray-500 dark:focus:border-gray-700 focus:bg-white dark:focus:bg-gray-500 focus:ring-0 date dark:text-gray-200 dark:placeholder-gray-200"
              />
              {/* <button
                className="bg-transparent hover:bg-blue-500 text-gray-700 dark:text-gray-200 font-light hover:text-white py-1 px-3 border border-gray-500 hover:border-transparent rounded"
                onClick={handleDateToday}
              >
                Today
              </button> */}
            </label>
            <label className="block" htmlFor="workType">
              <span className="text-gray-700 dark:text-gray-200">
                What type of work?
              </span>
              <select
                name="workOption[]"
                id="workType"
                className="block w-full mt-1 rounded-md bg-gray-100 dark:bg-gray-600 border-transparent focus:border-gray-500 dark:focus:border-gray-700 focus:bg-white dark:focus:bg-gray-500 focus:ring-0 dark:text-gray-200"
              >
                <option value="">
                  Please select the type of work you need
                </option>
                <option value="Repair">Repair</option>
                <option value="Installation">Installation</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Other">Other (Please describe below)</option>
              </select>
            </label>
            <label className="block" htmlFor="details">
              <span className="text-gray-700 dark:text-gray-200">
                Additional details
              </span>
              <textarea
                name="comments"
                id="details"
                className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-600 border-transparent focus:border-gray-500 dark:focus:border-gray-700 focus:bg-white dark:focus:bg-gray-500 focus:ring-0 dark:text-gray-200"
                rows="3"
              ></textarea>
            </label>
            <div className="block">
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center" htmlFor="optIn">
                    <input
                      type="checkbox"
                      name="emailOptIn"
                      id="optIn"
                      className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 dark:text-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                    />
                    <span className="ml-2 dark:text-gray-200">
                      Email me news and special offers
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="block">
              <div className="mt-2">
                <div>
                  <button
                    className="bg-blue-500 dark:bg-blue-300 hover:bg-blue-700 dark:hover:bg-blue-500 text-white dark:text-gray-700 font-bold py-2 px-4 border border-blue-700 dark:border-blue-500 rounded"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                <div
                  className="hidden text-green-600 font-semibold pt-3"
                  data-id="submitSuccess"
                >
                  Thanks for your submission. We'll reach out to you soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
