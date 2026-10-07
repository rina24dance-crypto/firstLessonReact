import styles from "../assets2/css/Block3.module.scss";
import Logo1 from "../assets2/Logo1.svg";
import Logo2 from "../assets2/Logo2.svg";
import Logo3 from "../assets2/Logo3.svg";
import Logo4 from "../assets2/Logo4.svg";
import Logo5 from "../assets2/Logo5.svg";
import Logo6 from "../assets2/Logo6.svg";
import Logo7 from "../assets2/Logo7.svg";
import greenLogo1 from "../assets2/greenLogo1.svg";
import greenLogo2 from "../assets2/greenLogo2.svg";
import greenLogo3 from "../assets2/greenLogo3.svg";






function Block3() {
    return (
        <div className={styles.Block3}>

            <div className={styles.clients}>Our Clients       {/*  clients — это название класса, а styles — объект, через который React получает классы из файла Block3.module.scss. */}
                <div className={styles.fortune}>We have been working with some Fortune 500+ clients</div>

            </div>


            <div className={styles.logos}>

                <img src={Logo1} alt="Logo1"></img>
                <img src={Logo2} alt="Logo2"></img>
                <img src={Logo3} alt="Logo3"></img>
                <img src={Logo4} alt="Logo4"></img>
                <img src={Logo5} alt="Logo5"></img>
                <img src={Logo6} alt="Logo6"></img>
                <img src={Logo7} alt="Logo7"></img>


            </div>




            <div className={styles.system}>Manage your entire community in a single system

                <div className={styles.suitable}>Who is Nextcent suitable for

                </div>

            </div>


            <div className={styles.threeSteps}>


                <div className={styles.firstStep}>

                    <img className={styles.logo1} src={greenLogo1} alt="green" />

                    <div className={styles.member}>Membership Organisations</div>

                    <div className={styles.memberText}>Our membership management software provides full automation of membership renewals and payments</div>

                </div>







                <div className={styles.secondStep}>

                    <img className={styles.logo2} src={greenLogo2} alt="green" />

                    <div className={styles.national}>National Associations</div>

                    <div className={styles.nationalText}>Our membership management software provides full automation of membership renewals <br></br> and payments</div>

                </div>





                 <div className={styles.thirdStep}>

                    <img className={styles.logo3} src={greenLogo3} alt="green" />

                    <div className={styles.clubs}>Clubs And Groups</div>

                    <div className={styles.clubsText}>Our membership management software provides full automation of membership renewals and payments</div>

                </div>





            </div>



        </div>
    )
}



export default Block3;