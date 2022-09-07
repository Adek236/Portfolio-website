import "./Header.css";
import ChatIcon from '@mui/icons-material/Chat';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Header = ({ children }) => {
  return (
    <header className="header">
        { children }
    </header>
  )
}

export default Header;