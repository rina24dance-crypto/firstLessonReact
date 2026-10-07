import styles from "../assets2/css/Header3.module.scss";       // CSS Module включается благодаря самому названию файла:
import newLogo from "../assets2/newLogo.svg";
                                                          // А styles — это просто имя объекта, под которым я импортировал классы из этого модуля:
function Header() {
    return (
        <header className={styles.header}>         
            <div className={styles.logo}>
                <img src={newLogo} alt="greenLogo" />

                <span>Nexcent</span>
            </div>

            <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Feature</a>
                <a href="#">Product</a>
                <a href="#">Testimonial</a>
                <a href="#">FAQ</a>
            </nav>

            <div className={styles.auth}>
                <button className={styles.login}>Login</button>
                <button className={styles.signUp}>Sign up</button>
            </div>
        </header>
    );
}

export default Header;




{/* <span className={styles.logoIcon}>◆</span> */ }