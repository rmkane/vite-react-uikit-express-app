import { ActiveLink } from "../common";

function Header() {
  return (
    <header className="uk-flex uk-navbar-container">
      <nav className="uk-navbar uk-flex-1" role="menubar">
        <div className="uk-navbar-left uk-flex">
          <a
            className="uk-navbar-item uk-logo"
            href="/"
            aria-label="Back to Home"
            role="menuitem"
          >
            React + Express App
          </a>
        </div>
        <div className="uk-navbar-right uk-flex uk-flex-right uk-flex-1">
          <ul className="uk-navbar-nav uk-visible">
            <ActiveLink to="/" text="Home" />
            <ActiveLink to="/notifications" text="Notifications" />
            <ActiveLink to="/time" text="Time" />
            <ActiveLink to="/contact" text="Contact" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
