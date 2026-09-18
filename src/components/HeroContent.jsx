import newArrow from "../assets/newArrow.svg";



function HeroContent() {
  return (
    <div className="hero-content">

      <h1>
        Your everyday <br /> tasks, automated.
      </h1>

      <p>
        Whirl lets you design and streamline <br /> your everyday tasks and
        workflows <br /> in just a few clicks.
      </p>

      <div className="hero-buttons">

        <button className="book-button">Book a demo</button>
        <button className="learn-button">Learn more
          <img src={newArrow} alt="newArrow" />
        </button>
      </div>

    </div>

  )
}



export default HeroContent;