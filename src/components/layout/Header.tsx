import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mediaAssets } from "../../data/media";
import { siteConfig } from "../../data/siteConfig";

const PAGES_DROPDOWN_ITEMS = [
  { label: "Careers", to: "/careers" },
  { label: "Team", to: "/team" },
  { label: "Blog", to: "/blog" },
];

export function Header() {
  const { pathname } = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const isPagesActive =
    pathname.startsWith("/careers") ||
    pathname.startsWith("/team") ||
    pathname.startsWith("/blog");

  return (
    <header className="navbar w-nav" role="banner">
      <div className="container w-container">
        <div className="nav-area">
          <Link to="/home" className="nav-logo-wrap w-nav-brand" aria-label="FlowSwipe Home">
            <img src={mediaAssets.brandLogo} alt="FlowSwipe" />
          </Link>

          <nav role="navigation" className="nav-wrap w-nav-menu" aria-label="Primary Navigation">
            <div className="nav-link-area">
              <Link
                to="/home"
                className={`nav-link w-nav-link ${pathname === "/home" ? "w--current active" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/features"
                className={`nav-link w-nav-link ${pathname === "/features" ? "w--current active" : ""}`}
              >
                Features
              </Link>

              <div
                ref={dropdownRef}
                className="navigation-dropdown nav-dropdown-wrapper w-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-link nav-dropdown w-dropdown-toggle ${
                    isPagesActive ? "active" : ""
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="menu"
                  onClick={() => setDropdownOpen((o) => !o)}
                  style={{
                    background: "transparent",
                    border: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    cursor: "pointer",
                    fontSize: "inherit",
                    fontFamily: "inherit",
                  }}
                >
                  <span>Pages</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="nav-dropdown-panel" role="menu">
                    {PAGES_DROPDOWN_ITEMS.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        role="menuitem"
                        className={`nav-dropdown-link ${
                          pathname.startsWith(item.to) ? "active" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about-us"
                className={`nav-link w-nav-link ${pathname === "/about-us" ? "w--current active" : ""}`}
              >
                About Us
              </Link>
            </div>

            <div className="nav-button-wrap">
              <Link to={siteConfig.loginUrl} className="primary-button w-button">
                Login
              </Link>
            </div>
          </nav>

          <button
            type="button"
            className="nav-menu-button w-nav-button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            style={{ background: "transparent", border: 0, cursor: "pointer" }}
          >
            <div className="nav-menu-line-wrap">
              <div className="nav-menu-line-top" />
              <div className="nav-menu-line-middle" />
              <div className="nav-menu-line-bottom" />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-label="Mobile Navigation">
          <div className="container w-container">
            <div className="mobile-nav-links">
              <Link to="/home" className={`nav-link ${pathname === "/home" ? "active" : ""}`}>
                Home
              </Link>
              <Link
                to="/features"
                className={`nav-link ${pathname === "/features" ? "active" : ""}`}
              >
                Features
              </Link>
              {PAGES_DROPDOWN_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link ${pathname.startsWith(item.to) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/about-us"
                className={`nav-link ${pathname === "/about-us" ? "active" : ""}`}
              >
                About Us
              </Link>
              <div className="nav-button-wrap" style={{ paddingLeft: 0, paddingTop: "12px" }}>
                <Link to={siteConfig.loginUrl} className="primary-button w-button">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
