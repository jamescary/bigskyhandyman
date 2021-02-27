const handleDateToday = (e) => {
  e.preventDefault();
  const el = document.querySelector('[data-input="date"]');
  el.value = new Date(Date.now()).toISOString().split("T")[0];
};

const handleSubmit = (event) => {
  // event.preventDefault();
  const el = document.querySelector('[data-id="submitSuccess"]');
  el.classList.remove("hidden");
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-12">
      <form
        name="contact"
        method="POST"
        // netlify-honeypot="bot-field"
        data-netlify="true"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
        <div className="mt-8 max-w-screen-xl w-96">
          <div className="grid grid-cols-1 gap-6">
            <label className="block" htmlFor="yourname">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                name="name"
                id="yourname"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block" htmlFor="youremail">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                name="email"
                id="youremail"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="john@example.com"
              />
            </label>
            <label className="block" htmlFor="yourphone">
              <span className="text-gray-700">Phone number</span>
              <input
                type="tel"
                name="phone"
                id="yourphone"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="(512) 555-9999"
              />
            </label>
            <label className="block" htmlFor="dateRequested">
              <span className="text-gray-700">When do you need it done?</span>
              <input
                type="date"
                name="serviceDate"
                id="dateRequested"
                data-input="date"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
              <button
                className="bg-transparent hover:bg-blue-500 text-gray-700 font-light hover:text-white py-1 px-3 border border-gray-500 hover:border-transparent rounded"
                onClick={handleDateToday}
              >
                Today
              </button>
            </label>
            <label className="block" htmlFor="workType">
              <span className="text-gray-700">What type of work?</span>
              <select
                name="workOption[]"
                id="workType"
                className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              >
                <option value="Repair">Repair</option>
                <option value="Installation">Installation</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="block" htmlFor="details">
              <span className="text-gray-700">Additional details</span>
              <textarea
                name="comments"
                id="details"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
                      className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                    />
                    <span className="ml-2">
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
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
