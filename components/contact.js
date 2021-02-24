const handleDateToday = (e) => {
  const el = document.querySelector('[data-input="date"]');
  el.value = new Date(Date.now()).toISOString().split("T")[0];
};

export default function Contact() {
  return (
    <div class="py-12">
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p class="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <h2 class="text-2xl font-bold">Contact Us</h2>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Full name</span>
              <input
                type="text"
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder=""
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Email address</span>
              <input
                type="email"
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Phone number</span>
              <input
                type="tel"
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="(512) 555-9999"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">When do you need it done?</span>
              <input
                type="date"
                data-input="date"
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
              <button
                class="bg-transparent hover:bg-blue-500 text-gray-700 font-light hover:text-white py-1 px-3 border border-gray-500 hover:border-transparent rounded"
                onClick={handleDateToday}
              >
                Today
              </button>
            </label>
            <label class="block">
              <span class="text-gray-700">What type of work?</span>
              <select class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                <option>Repair</option>
                <option>Installation</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Other</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Additional details</span>
              <textarea
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                rows="3"
              ></textarea>
            </label>
            <div class="block">
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                    />
                    <span class="ml-2">Email me news and special offers</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="mt-2">
                <div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
