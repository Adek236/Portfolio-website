import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";

function NavBar({ showModal, setShowModal, modalRef, navigationRef }) {
  // const toggleShowModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  return (
    <div className="navigation">
      <nav aria-label="Primary">
        <div>
          <a role="button" aria-label="Login" href="/">
            <PersonIcon />
          </a>
        </div>
        <div>
          <a role="button" aria-label="Home page" href="/">
            <DiamondIcon />
          </a>
        </div>
        <div
          role="button"
          aria-label="Open modal"
          tabIndex="0"
          // ref={navigationRef}
          // onClick={() => toggleShowModal()}
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
      </nav>
    </div>
  );
}

export default NavBar;
