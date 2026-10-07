import styles from "../assets2/css/BigBlock.module.scss";
import illustration from "../assets2/illustration.png";



function BigBlock() {
    return (
        <div className={styles.BigBlock}>

            <div className={styles.firstPart}>
                <div className={styles.experience}>Lessons and insights  <span> from 8 years </span> </div>    {/*  У span нету className, поэтому в scss он идет без точки, так как я обращаюсь именно к html-тэгу span. Без точки это тэг, а с точкой это класс */}

                <div className={styles.business}>Where to grow your business as a photographer: site or social media?</div>

                <button className={styles.button}>Register</button>

            </div>


            <img className={styles.illustration} src={illustration} alt="illustration" />





        </div>
    )
}



export default BigBlock;



