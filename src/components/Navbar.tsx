import { routes } from "../router/routes";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useUiStore } from "../store/uiStore";
import { Menu } from "lucide-react";
import testLogo from "../assets/testLogo-nobg.webp";
import { SocialLinks } from "./common/SocialLinks";

const Navbar = () => {
  const { navbarDropdown, toggleNavbarDropdown, closeAllDropdowns } =
    useUiStore();
  const location = useLocation();

  return (
    <div className="container mx-auto">
      <nav className="flex items-center p-4 justify-between">
        <div className="w-24">
          <img className="invert" src={testLogo} alt="Logo" />
        </div>
        <ul className="hidden md:flex justify-end ms-auto">
          {routes
            .map((route) => (
              <>
              <li key={route.label} className="px-4">
                <Link
                  to={route.path}
                  className={`hover:text-blue-800 ${
                    location.pathname === route.path ? "text-blue-800" : ""
                  }`}
                  >
                  {route.label}
                </Link>
              </li>
                  </>
            ))}
        </ul>
        <SocialLinks className="hidden md:flex w-2/12 justify-end space-x-5 ms-4" />

        {/* Bottone menu per mobile */}
        <button className="md:hidden" onClick={toggleNavbarDropdown}>
          <Menu className={`${navbarDropdown ? "text-blue-800" : ""}`} />
        </button>

        {/* Dropdown menu visibile su mobile */}
        <AnimatePresence>
          {navbarDropdown && (
            <motion.div
              className="flex flex-col absolute left-0 top-full min-h-100 w-3/4 z-50 py-4 shadow-xl bg-blue-100 md:hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "top", height: "calc(100vh - 88px)" }}
            >
              
                {routes.map(
                  (route) =>
                    route.label && (
                      <div key={route.label} className="border-b border-blue-200">
                        <Link
                          to={route.path}
                          onClick={closeAllDropdowns}
                          className={`text-center block py-4 px-4 hover:bg-sky-300 ${
                            location.pathname === route.path
                              ? "text-grey-700"
                              : ""
                          }`}
                        >
                          {route.label}
                        </Link>
                      </div>
                    )
                )}
                <div className="mt-auto">
                  <SocialLinks className="flex justify-center space-x-6" />
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;