import styles from "../assets2/css/Block4.module.scss";
import newGreenPic from "../assets2/newGreenPic.svg";
import Icon1 from "../assets2/Icon1.svg";
import Cactus from "../assets2/Cactus.svg";
import Icon3 from "../assets2/Icon3.svg";
import Icon4 from "../assets2/Icon4.svg";
import pana from "../assets2/pana.png";
import blackPic from "../assets2/blackPic.png";
import lastlogo1 from "../assets2/lastlogo1.svg";
import lastlogo2 from "../assets2/lastlogo2.svg";
import lastlogo3 from "../assets2/lastlogo3.svg";
import lastlogo4 from "../assets2/lastlogo4.svg";
import lastlogo5 from "../assets2/lastlogo5.svg";
import lastlogo6 from "../assets2/lastlogo6.svg";
import right from "../assets2/right.svg";
import newPic1 from "../assets2/newPic1.svg";
import newPicture2 from "../assets2/newPicture2.svg";
import NewPic3 from "../assets2/NewPic3.svg";




function Block4() {
    return (

        <>

            <div className={styles.Block4}>




                <img className={styles.newGreenPic} src={newGreenPic} alt="greenPic" />


                <div className={styles.rightSide}>

                    <h2 className={styles.unseen}>The unseen of spending three years at Pixelgrade  </h2>


                    <p className={styles.unseenText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>


                    <button className={styles.learn}>Learn More</button>



                </div>



            </div>


            <div className={styles.Block4Part2}>


                <div className={styles.allReinvent}>
                    <h2 className={styles.reinvent}>Helping a local <span> business reinvent itself</span></h2>

                    <p className={styles.justText}>We reached here with our hard work and dedication</p>
                </div>


                <div className={styles.allFour}>
                    <div>

                        <div className={styles.one}>

                            <img src={Icon1} alt="Icon1" />

                            <div>

                                <div className={styles.number}>2,245,341</div>
                                <div className={styles.noun}>Members</div>


                            </div>


                        </div>



                        <div className={styles.two}>

                            <img src={Cactus} alt="Icon1" />

                            <div>

                                <div className={styles.number}>828,867</div>
                                <div className={styles.noun}>Event Bookings</div>


                            </div>


                        </div>


                    </div>


                    <div>


                        <div className={styles.three}>

                            <img src={Icon3} alt="Icon1" />

                            <div>

                                <div className={styles.number}>46,328</div>
                                <div className={styles.noun}>Clubs</div>


                            </div>


                        </div>





                        <div className={styles.four}>

                            <img src={Icon4} alt="Icon1" />

                            <div>

                                <div className={styles.number}>1,926,436</div>
                                <div className={styles.noun}>Payments</div>


                            </div>


                        </div>


                    </div>


                </div>

            </div>



            <div className={styles.Block4Part3}>


                <img src={pana} alt="pana"></img>

                <div className={styles.designRightside}>

                    <h2 className={styles.design}>How to design your site footer like we did</h2>


                    <p className={styles.designText}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                        massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
                        Vivamus vehicula leo dui, at porta nisi
                        facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                        efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>


                    <button className={styles.greenButton}>Learn More</button>





                </div>

            </div>




            <div className={styles.Block4Part4}>

                <img src={blackPic} alt="blackPic" />


                <div className={styles.bigRightSide}>

                    <p className={styles.blackText}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,
                        at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                        Suspendisse cursus tellus sed augue ultrices, quis tristique
                        nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat
                        ante feugiat eget. Quisque vulputate odio neque,
                        eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.

                    </p>


                    <div className={styles.name}>Tim Smith

                        <p className={styles.description}>British Dragon Boat Racing Association</p>


                    </div>


                    <div className={styles.lastLogos}>

                        <img src={lastlogo1} alt="lastlogos" />
                        <img src={lastlogo2} alt="lastlogos" />
                        <img src={lastlogo3} alt="lastlogos" />
                        <img src={lastlogo4} alt="lastlogos" />
                        <img src={lastlogo5} alt="lastlogos" />
                        <img src={lastlogo6} alt="lastlogos" />

                        <p className={styles.customers}>Meet all customers

                            <img src={right} alt="arrow" />

                        </p>


                    </div>

                </div>



            </div>




            <div className={styles.Block4Part5}>


                <div className={styles.caring}>
                    Caring is the new marketing

                    <div className={styles.caringText}>
                        The Nexcent blog is the best place to read about the latest membership insights,
                        trends and more. See who's joining the community, read about how our community are
                        increasing their membership income and lot's more.
                    </div>



                </div>


                <div className={styles.allPics}>


                    <img src={newPic1} width={368} height={366} alt="pic1" />
                    <img src={newPicture2} width={368} height={366} alt="pic2" />
                    <img src={NewPic3}  width={368} height={366} alt="pic3" />

                </div>





            </div>

        </>



    )

}



export default Block4;



