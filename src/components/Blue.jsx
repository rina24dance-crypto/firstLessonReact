import lamp from "../assets/lamp.svg";
import checkMark from "../assets/checkMark.svg"




function Blue() {
    return (


        <div className="allBlock3">


            <img src={lamp} alt="lamp" className="lamp" />



            <div className="rightSide2">

                <div className="set">Set, forget, and then track.</div>

                <div className="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>




                <div className="bigMark">


                    <div className="mark">

                        <img src={checkMark} alt="mark" />

                        <div className="text4">Understand your options</div>



                    </div>



                    <div className="mark2">

                        <img src={checkMark} alt="mark" />

                        <div className="text4">No lock-ins</div>



                    </div>




                    <div className="mark3">

                        <img src={checkMark} alt="mark" />

                        <div className="text4">You own the shares</div>



                    </div>





                    <div className="demo">Book a Demo</div>


                </div>


            </div>


        </div>

    )

}



export default Blue;