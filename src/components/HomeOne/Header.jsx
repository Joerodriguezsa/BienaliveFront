import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "../../lib/useScrollPosition";
import logo1 from "../../assets/images/logo/logo.png";
import logo2 from "../../assets/images/logo/logo-light.png";
import Navigation from "../Navigation.jsx";
import MobileMenu from "../MobileMenu.jsx";
import StickyHeader from "../../lib/StickyMenu.js";
import {
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
  COMPANY_ADDRESS,
} from "../../config/constants.js";

// ✅ Modal + Auth
import AuthModal from "../auth/AuthModal.jsx"; // ajusta si tu ruta cambia
import { useAuth } from "../../auth/AuthContext.jsx"; // ajusta si tu ruta cambia

function Header({ className = "", scroll = false }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const isSticky = useScrollPosition(100);

  // ✅ Auth modal state
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login"); // "login" | "register"

  const { isAuthenticated, logout, name } = useAuth();

  useEffect(() => {
    StickyHeader();

    const checkDarkMode = () => {
      const bodyHasDarkMode = document.body.classList.contains("dark-mode");
      setDarkMode(bodyHasDarkMode);
    };

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleSearchPopup = () => setSearchPopupOpen((prev) => !prev);
  const closeSearchPopup = () => setSearchPopupOpen(false);

  const openLogin = () => {
    setAuthTab("login");
    setAuthOpen(true);
  };

  const openRegister = () => {
    setAuthTab("register");
    setAuthOpen(true);
  };

  const openLoginFromSidebar = () => {
    closeMobileMenu();
    openLogin();
  };

  const openRegisterFromSidebar = () => {
    closeMobileMenu();
    openRegister();
  };

  const logoutFromSidebar = () => {
    closeMobileMenu();
    logout();
  };

  return (
    <>
      {/* Header */}
      <header className={`header-area header-three-area ${className || ""}`}>
        <div className="header-one__wrp">
          <div className="header__main">
            <Link to="/" className="logo">
              <img src={logo1} alt="logo" />
            </Link>

            <div className="main-menu">
              <nav>
                <Navigation />
              </nav>
            </div>

            <div className="menu-btns">
              {/* ✅ Botón Login/Logout */}
              {!isAuthenticated ? (
                <button
                  type="button"
                  className="book-now"
                  onClick={openLogin}
                  style={{ border: "none" }}
                >
                  Login
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_441)">
                      <path
                        d="M11.5975 12.4898C11.6058 12.4882 11.614 12.4859 11.6222 12.4838C11.6298 12.4819 11.6374 12.4802 11.6449 12.478C11.653 12.4755 11.6608 12.4725 11.6686 12.4697C11.6761 12.467 11.6837 12.4645 11.6911 12.4615C11.6984 12.4584 11.7055 12.4548 11.7127 12.4514C11.7203 12.4478 11.728 12.4445 11.7354 12.4405C11.7423 12.4368 11.7488 12.4326 11.7555 12.4286C11.7628 12.4242 11.7702 12.4201 11.7773 12.4153C11.7847 12.4104 11.7917 12.4049 11.7987 12.3996C11.8047 12.3951 11.8108 12.391 11.8166 12.3862C11.8292 12.3759 11.8413 12.3651 11.8527 12.3536C11.8652 12.3411 11.8761 12.329 11.8864 12.3165C11.8998 12.2986 11.9106 12.2845 11.9155 12.2772C11.9288 12.2553 11.937 12.2421 11.9406 12.2352C11.9516 12.2125 11.9586 12.1983 11.9616 12.1909C11.9698 12.1685 11.9757 12.1528 11.9781 12.1447C11.984 12.122 11.9883 12.1057 11.99 12.0973C11.9941 12.0708 11.9965 12.0563 11.9972 12.0489C11.9988 12.0325 11.9997 12.016 11.9997 11.9995V5.49951C11.9997 5.22337 11.7759 4.99952 11.4997 4.99952C11.2236 4.99952 10.9997 5.22337 10.9997 5.49951V10.7924L0.853309 0.645955C0.658051 0.450697 0.341457 0.450697 0.146199 0.645955C-0.0490586 0.841213 -0.0490586 1.15781 0.146199 1.35306L10.2926 11.4995H4.99975C4.72361 11.4995 4.49976 11.7234 4.49976 11.9995C4.49976 12.2756 4.72361 12.4995 4.99975 12.4995H11.4997C11.5162 12.4995 11.5327 12.4987 11.5491 12.497C11.571 12.4939 11.5887 12.4916 11.5975 12.4898Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_441">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              ) : (
                <div className="header-auth">
                  <span className="header-auth__name text-white">
                    {name ? `Hola, ${name}` : "Sesion iniciada"}
                  </span>
                  <button
                    type="button"
                    className="book-now"
                    onClick={logout}
                    style={{ border: "none" }}
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* ✅ HAMBURGUESA (solo móvil/tablet) */}
              <button
                type="button"
                className="menubars d-inline-flex d-xl-none"
                onClick={toggleMobileMenu}
                aria-label="Open menu"
                style={{ border: "none", background: "transparent" }}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar (offcanvas) */}
      <div
        className={`sidebar-area offcanvas ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="offcanvas-header">
          <Link to="/index" className="logo" onClick={closeMobileMenu}>
            <img src={logo2} alt="logo" />
          </Link>

          <button type="button" className="btn-close" onClick={closeMobileMenu}>
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>

        <div className="offcanvas-body sidebar__body">
          <div className="mobile-menu overflow-hidden">
            <MobileMenu />
          </div>

          <div className="d-none d-lg-block">
            <h5 className="text-white mb-20">About Us</h5>
            <p className="sidebar__text">
              Unleash the full potential of your website and elevate its online
              presence with our comprehensive consultation solutions.
            </p>
          </div>

          <div className="sidebar__contact-info mt-30">
            <h5 className="text-white mb-20">Contact Info</h5>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <Link to="/#0" style={{ whiteSpace: "pre-line" }}>
                  {COMPANY_ADDRESS}
                </Link>
              </li>
              <li className="py-2">
                <i className="fa-solid fa-phone-volume"></i>{" "}
                <Link to="/0">{SUPPORT_PHONE}</Link>
              </li>
              <li>
                <i className="fa-solid fa-paper-plane"></i>{" "}
                <Link to="/#0">{SUPPORT_EMAIL}</Link>
              </li>
            </ul>
          </div>

          {/* ✅ Sign In/Up abren modal y cierran sidebar */}
          <div className="sidebar__btns my-4">
            {!isAuthenticated ? (
              <>
                <button
                  type="button"
                  onClick={openRegisterFromSidebar}
                  style={{ border: "none" }}
                >
                  Sign Up
                </button>

                <button
                  type="button"
                  className="sign-in"
                  onClick={openLoginFromSidebar}
                  style={{ border: "none" }}
                >
                  Sign In
                </button>
              </>
            ) : (
              <button
                type="button"
                className="sign-in"
                onClick={logoutFromSidebar}
                style={{ border: "none" }}
              >
                Logout
              </button>
            )}
          </div>

          <div className="sidebar__socials">
            {/* deja tu bloque de redes igual */}
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab={authTab}
      />

      {/* Fullscreen search */}
      <div className={`search-wrap ${isSearchPopupOpen ? "active" : ""}`}>
        <div className="search-inner">
          <i
            className="fa-light fa-xmark search-close"
            id="search-close"
            onClick={closeSearchPopup}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
