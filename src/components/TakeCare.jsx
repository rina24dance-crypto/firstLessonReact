import littlePic1 from "../assets/littlePic1.svg";
import littlePic2 from "../assets/littlePic2.svg";
import littlePic3 from "../assets/littlePic3.svg";
import littlePic4 from "../assets/littlePic4.svg";
import line from "../assets/line.svg";
import arrow from "../assets/arrow.svg";
//import bigFlower from "../assets/bigFlower.png";
import bigFlower2 from "../assets/bigFlower2.svg"





function TakeCare() {
    return (



        <>
            <div className="allBlock">


                <div className="leftSide">

                    <div className="heading">We will take care of everything, <br></br> so you can get back to relaxing.</div>



                    <img src={line} className="line" alt="line" width={450} />

                    <div className="anti-techno">
                        <img src={littlePic1} alt="little" />

                        <div className="techno">Anti-loss technology</div>

                        <img src={arrow} className="arrow" alt="arrow" />

                    </div>


                    <div className="text">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua.</div>


                    <div className="lines">
                        <img src={line} className="line" alt="line" width={450} />
                        <img src={line} className="line" alt="line" width={450} />

                    </div>

                    <div className="Exchange">

                        <img src={littlePic2} alt="little" />

                        <div className="exchange">Exchange easily</div>

                        <img src={arrow} className="arrow" alt="arrow" />

                    </div>


                    <div className="lines">
                        <img src={line} className="line" alt="line" width={450} />
                        <img src={line} className="line" alt="line" width={450} />

                    </div>



                    <div className="Encrypted">

                        <img src={littlePic3} alt="little" />

                        <div className="encrypted">Fully encrypted</div>

                        <img src={arrow} className="arrow" alt="arrow" />
                    </div>


                    <div className="lines">
                        <img src={line} className="line" alt="line" width={450} />
                        <img src={line} className="line" alt="line" width={450} />

                    </div>


                    <div className="Options">

                        <img src={littlePic4} alt="little" />

                        <div className="options">Plenty of options</div>

                        <img src={arrow} className="arrow" alt="arrow" />

                    </div>


                    <img src={line} className="line" alt="line" width={450} />


                </div>



              
             

                <div className="rightSide">
                    <img src={bigFlower2} className="flower" alt="flower" />
                </div>


            </div >







        </>

    )
}


export default TakeCare;