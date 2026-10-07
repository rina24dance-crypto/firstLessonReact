import styles from "../assets2/css/FigmaFooter.module.scss";
import insta from "../assets2/insta.svg";
import internet from "../assets2/internet.svg";
import twitter from "../assets2/twitter.svg";
import youtube from "../assets2/youtube.svg";
import whiteArrow from "../assets2/whiteArrow.svg";
import send from "../assets2/send.svg";
import greenLogo from "../assets2/greenLogo.svg";





function FigmaFooter() {
    return (





        <div className={styles.FigmaFooter}>




            <div className={styles.upperSide}>

                <h1 class={styles.heading}>Pellentesque suscipit fringilla libero eu.</h1>

                <button className={styles.demo}>Get a Demo <span>
                    <img src={whiteArrow} alt="whiteArrow" />
                </span>
                </button>



            </div>




            <div className={styles.downSide}>


                <div className={styles.nexcentBlock}>




                    <div className={styles.Nexcent}>

                        <img src={greenLogo} alt="green" />

                        <span>Nexcent</span>

                    </div>



                    <div className={styles.text}>

                        <p className={styles.copyright}>Copyright © 2020 Nexcent ltd.</p>
                        <p className={styles.reserved}>All rights reserved</p>

                    </div>




                    <div className={styles.icons}>

                        <img src={insta} alt="insta" />
                        <img src={internet} alt="internet" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />


                    </div>





                </div>



                <div className={styles.downRightside}>


                    <div className={styles.Incompany}>


                        <div className={styles.company}>Company</div>




                        <ul>

                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>


                        </ul>






                    </div>




                    <div className={styles.Insupport}>


                        <p className={styles.support}>Support</p>


                        <ul>


                            <li>Help Center</li>

                            <li>Terms of service</li>

                            <li>Legal</li>

                            <li>Privacy policy</li>

                            <li>Status</li>


                        </ul>




                    </div>



                    <div className={styles.toDate}>

                        <div className={styles.stayUp}>Stay up to date</div>


                        <div className={styles.emailBox}>

                            <input

                                // className={styles.input}

                                type="email"

                                placeholder="Your email address" />

                            <img src={send} alt="send" />

                        </div>



                    </div>


                </div>



            </div>




        </div>
    )
}



export default FigmaFooter;