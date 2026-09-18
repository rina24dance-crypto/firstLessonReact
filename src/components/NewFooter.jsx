import twitter from "../assets/twitter.svg";
import justiIn from "../assets/justIn.svg";
import facebook from "../assets/facebook2.svg";
import Vector from "../assets/Vector.svg"
import newArrow from "../assets/newArrow.svg";
// import shortLine from "../assets/shortLine.svg";







function NewFooter() {
    return (

        <>
            <div className="finalUpperBlock">



                <div className="newWhirl">


                    <div className="allIcon">

                        <img src={Vector} width={30} height={40} alt="vector" />

                        <div className="icon">Whirl</div>


                    </div>



                    <div className="built">Built by <a href='#'> Nikolai Bain.</a> </div>

                    <div className="powered">Powered by <a href='#'>Webflow.</a> </div>



                </div>



                <div className="allInfo">





                    <ul>

                        <div className="info">Info</div>

                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Support</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>



                    </ul>

                </div>




                <ul>

                    <div className="admin">Admin</div>


                    <li>Style Guide</li>
                    <li>Licenses</li>
                    <li>Instructions</li>
                    <li>Changelog</li>
                    <li>Password</li>
                    <li>404</li>

                </ul>



                <div className="block4">

                    <div className="newsletter">Newsletter</div>

                    <div className="signUp">Sign up for the latest news, company insights, and Whirl updates.</div>


                    <div className="fullEmail">

                        <div className="newEmail">Your email</div>

                        <img src={newArrow} alt="newArrow" />

                    </div>



                    {/* <img src={shortLine} className="shortLine" alt="line" /> */}




                </div>





            </div>



            <div className="finalDownBlock">

                <div className="streamline">© 2022 Whirl. All Rights Reserved.
                    Illustrations by <a href='#'> Streamline.</a></div>



                <div className="socialMedia">

                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={justiIn} alt="justIn" />


                </div>

            </div>

        </>


    )
}





export default NewFooter;