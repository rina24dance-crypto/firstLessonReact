import greyMark from "../assets/greyMark.svg";




function GetStarted() {
    return (
        <div className="allBlock5">

            <div className="get">Get started with Whirl</div>

            <div className="anotherText2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

            <button className="newDemo">Book a demo</button>


            <div className="allMarks">


                <div className="marks">

                    <img src={greyMark} width={13} height={7} alt="greyMark" />

                    <div className="free">Free 30-day trial</div>

                </div>


                <div className="marks2">

                    <img src={greyMark} width={13} height={7} alt="greyMark" />

                    <div className="credit">No credit-card required</div>

                </div>

            </div>


        </div>
    )
}








export default GetStarted;