import "./Header.css";

const Header = ({ children, headerRef }) => {
  return (
    <header ref={headerRef} className="header">
        { children }
    </header>
  )
}

export default Header;