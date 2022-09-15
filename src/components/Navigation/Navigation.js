import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
// import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";

const NavBar = ({ toggleModal, showModal, setShowModal, modalRef, navigationRef }) => {
  // const toggleShowModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  return (
    <nav className="navigation" aria-label="Primary">
      <div className="navigation__icons navigation__icons--open">
        <div>
          <DarkModeIcon />
        </div>
        <div>
          <LanguageIcon />
        </div>
        <div
          role="button"
          aria-label="Open modal"
          tabIndex="0"
          // ref={navigationRef}
          onClick={() => toggleModal()}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     toggleShowModal();
          //   }
          //   if (e.key === "Tab" && showModal && !e.shiftKey) {
          //     modalRef.current.focus();
          //   }
          // }}
        >
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
