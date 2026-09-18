import littlePic7 from "../assets/littlePic7.svg";
import littlePic8 from "../assets/littlePic8.svg";
import littlePic9 from "../assets/littlePic9.svg";
import littlePic10 from "../assets/littlePic10.svg";




function Automated() {
    return (
        <div className="AllBlock2">

            <div className="upperSide">

                <div className="tasks">Your tasks, automated.</div>
                <div className="newText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

            </div>

            <div className="downSide">

                <div className="Block">
                    <img src={littlePic7} alt="little" />
                    <div className="learn">Learn your options.</div>
                    <div className="newText2">Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit, <br></br> sed do eiusmod tempor.</div>
                </div>



                <div className="Block">
                    <img src={littlePic8} alt="little" />
                    <div className="inform">Stay informed.</div>
                    <div className="newText2">Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt <br></br> ut labore et doloretro.</div>
                </div>



                <div className="Block">
                    <img src={littlePic9} alt="little" />
                    <div className="automate">Automate it all.</div>
                    <div className="newText2">Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit, sed <br></br> do eiusmod tempor ipsum.</div>
                </div>



                <div className="Block">
                    <img src={littlePic10} alt="little" />
                    <div className="inform">Stay informed.</div>
                    <div className="newText2">Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit, <br></br> sed do eiusmod incididunt ut <br></br> labore et consectetur.</div>
                </div>



            </div>




           

        </div>
    )
}


export default Automated;