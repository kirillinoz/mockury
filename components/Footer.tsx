import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link
              href="mailto:social@mockury.com"
              className="text-base text-gray-100 hover:text-gray-200"
            >
              Contact us
            </Link>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://twisty-professor-6d5.notion.site/Mockury-fe8a16d96ccd4dada0f2809afac5281d"
              className="text-gray-100 hover:text-gray-200"
            >
              Terms of use
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://twisty-professor-6d5.notion.site/Mockury-fe8a16d96ccd4dada0f2809afac5281d"
              className="text-gray-100 hover:text-gray-200"
            >
              Privacy policy
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-300">
          &copy; {new Date().getFullYear()} Mockury. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
