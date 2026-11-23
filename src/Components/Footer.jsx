import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return(
    <footer className="app-footer">
        <p>Hecho con <FaHeart className="heart-icon" /> por <strong>DevKiller59</strong> &copy; {new Date().getFullYear()}</p>
        <p>Powered by <strong>OpenWeatherMap API</strong></p>
        <div className="footer-links">
          <a href="https://github.com/devkiller59" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
      </footer>
    )
};


export default Footer;