import Lightning from "../assets/Lightning.svg";
import Dollar from "../assets/Dollar.svg";
import Hand from "../assets/Hand.svg";



function Foreign() {
    return (
        //Открывающая угловая скобка Fragment
        <>

            <div className="allColors">
                <div className="Yellow">
                    <img src={Lightning} alt="YellowStuff" />

                    <div className="textOne">Fast. Really fast.</div>

                    <div className="textTwo">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br></br> aliquip ex ea commodo consequat.</div>

                </div>


                <div className="Blue">
                    <img src={Dollar} alt="Dollar" />


                    <div className="textThree">More bang for buck.</div>

                    <div className="textFour">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br></br> aliquip ex ea commodo consequat.</div>

                </div>



                <div className="Pink">
                    <img src={Hand} alt="Hand" />

                    <div className="textFive">Safe and secure.</div>

                    <div className="textSix">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br></br> aliquip ex ea commodo consequat.</div>
                </div>

            </div>

        </>

        //Закрывающая угловая скобка Fragment. Они нужны потому-что в React JSX внутри return должно быть одно общее корневое содержимое. Как альтернативу можно использовать обычный div без классов


    )
}









export default Foreign;