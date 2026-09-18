import FocusFox from "../assets/FocusFox.svg";
import NowInTech from "../assets/NowInTech.svg";
import Optimer from "../assets/Optimer.svg";
import Carded from "../assets/Carded.svg";



function Companies() {
    return (

        <div className="Companies">
            <div className="trust">
                Trusted by 50,000+ companies
            </div>

            <div className="Pictures">

                <img src={FocusFox} alt="FocusFox" />
                <img src={NowInTech} alt="NowInTech" />
                <img src={Optimer} alt="Optimer" />
                <img src={Carded} alt="Carded" />

            </div>

        </div>


    )
}



export default Companies;