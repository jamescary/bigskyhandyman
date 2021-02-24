const handleDateToday = (e) => {
  e.preventDefault();
  const el = document.querySelector('[data-input="date"]');
  el.value = new Date(Date.now()).toISOString().split("T")[0];
};

const handleSubmitContact = (e) => {
  e.preventDefault();
  const el = document.querySelector('[data-id="submitSuccess"]');
  el.classList.remove("hidden");
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-12">
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <div className="mt-8 max-w-screen-xl w-96">
          <div className="grid grid-cols-1 gap-6">
            <label className="block" htmlFor="name">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label className="block" htmlFor="email">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="john@example.com"
              />
            </label>
            <label className="block" htmlFor="phone">
              <span className="text-gray-700">Phone number</span>
              <input
                type="tel"
                name="phone"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="(512) 555-9999"
              />
            </label>
            <label className="block" htmlFor="dateRequested">
              <span className="text-gray-700">When do you need it done?</span>
              <input
                type="date"
                name="dateRequested"
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
                name="workType"
                className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              >
                <option>Repair</option>
                <option>Installation</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block" htmlFor="details">
              <span className="text-gray-700">Additional details</span>
              <textarea
                name="details"
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
                      name="optIn"
                      className="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                    />
                    <span className="ml-2">
                      Email me news and special offers
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="mt-2">
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    onClick={handleSubmitContact}
                    type="submit"
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
