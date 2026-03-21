const Footer = () => {
  return(
    <footer className='footer padding'>
      <div>
        <p>&copy; <a href="https://github.com/devkiller59">@devKiller59</a> - All rights reserved</p>
        <p><b>Powered by:</b> OpenWeatherMap API</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
    )
};


export default Footer;