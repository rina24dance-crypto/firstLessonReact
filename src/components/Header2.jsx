
import Vector from "../assets/Vector.svg"       // Компонент из другого файла поэтому нужен импорт


function Header2() {
  return (
    <header className="header2">

      <div className="logo">
        <img src={Vector} alt="Vector"/>
        {/* <span className="logo-icon">◉</span> */}
        <span>Whirl</span>
      </div>


      <nav className="nav">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Integrations</a>
        <a href="#">Learn</a>

      </nav>


      <div className="header-buttons">
        <button className="sign-in">Sign in</button>
        <button className="book-button">Book a demo</button>
      </div>

    </header>
  )
}


export default Header2;


