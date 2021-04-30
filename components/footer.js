const year = new Date(Date.now()).getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="max-w-3xl lg:max-w-7xl mx-auto text-sm font-thin text-gray-600 dark:text-gray-200 pb-3">
        Copyright Big Sky Handyman LLC {year}
      </div>
    </footer>
  );
}
