import "flowbite";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("theme in header=>", theme);

  return (
    <header>
      <nav
        className={`
    ${theme == "light" ? "bg-white text-black" : "bg-gray-800 text-white"}
    "text-gray-600 body-font"`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              your logo
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              className={`
    ${
      theme === "light"
        ? "bg-gray-600 text-white hover:bg-gray-200 hover:text-black"
        : "bg-gray-600 text-white hover:bg-gray-500 hover:text-white"
    }
    font-bold py-2 px-4 rounded-lg border-b-2 transition duration-300 ease-in-out
  `}
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul
              className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
              rounded-lg ${
                theme === "light" ? "bg-white text-black" : " text-white"
              } 
              md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
            >
              <li>
                <Link
                  to="./"
                  className={`block py-2 px-3 md:p-0 rounded 
                 ${theme === "light" ? "text-yellow-500 " : "text-yellow-500 "}
                 hover:bg-yellow-500 hover:text-white md:hover:bg-transparent md:hover:text-yellow-500 dark:hover:text-yellow-500`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="./about"
                  className={`block py-2 px-3 md:p-0 rounded 
                 ${
                   theme === "light"
                     ? "text-gray-900 hover:bg-gray-100"
                     : "text-white hover:bg-gray-700"
                 }
                 md:hover:bg-transparent md:hover:text-yellow-500 dark:hover:text-yellow-500`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="./services"
                  className={`block py-2 px-3 md:p-0 rounded 
                 ${
                   theme === "light"
                     ? "text-gray-900 hover:bg-gray-100"
                     : "text-white hover:bg-gray-700"
                 }
                 md:hover:bg-transparent md:hover:text-yellow-500 dark:hover:text-yellow-500`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="./contact"
                  className={`block py-2 px-3 md:p-0 rounded 
                 ${
                   theme === "light"
                     ? "text-gray-900 hover:bg-gray-100"
                     : "text-white hover:bg-gray-700"
                 }
                 md:hover:bg-transparent md:hover:text-yellow-500 dark:hover:text-yellow-500`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
