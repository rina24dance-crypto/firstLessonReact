import Header2 from "./components/Header2.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";            // Одна точка значит путь в той же папке
import Foreign from "./components/Foreign.jsx";
import TakeCare from "./components/TakeCare.jsx";
import Whirl from "./components/Whirl.jsx";
import Blue from "./components/Blue.jsx";
import Automated from "./components/Automated.jsx";
import Blog from "./components/Blog.jsx";
import GetStarted from "./components/GetStarted.jsx";
import NewFooter from "./components/NewFooter.jsx";
//import HeroContent from "./components/HeroContent.jsx";      // Можно и без hero.jsx но тогда сюда в app2.jsx нужно импортировать heroContent и heroImage /import HeroImage from "./components/HeroImage.jsx";        // Hero нужен для того чтобы App не занимался внутренним устройством Hero
import "./pages/App2.scss";
import "./pages/Companies.css";
import "./pages/Foreign.css";
import "./pages/TakeCare.css";
import "./pages/Whirl.css";
import "./pages/Blue.css";
import "./pages/Automated.css";
import "./pages/Blog.css";
import "./pages/GetStarted.css"
import "./pages/NewFooter.css"

function App2() {
    return (
        <>

           <Header2 />         {/* Header2 — это название моего React-компонента, а <Header2 /> это самозакрывающийся JSX-тег, с помощью которого ты используешь (рендеришь) компонент Header2 в jsx */}
           <Hero/>              {/* Тоже самое */}
           <Companies/>                   {/* Header2 → создаю компонент в файле Header2.jsx */}
           <Foreign/>                  {/*   <Header2 /> в App2.jsx → вставляю (рендерю) этот компонент на страницу.  */}
           <TakeCare/>
           <Whirl/>
           <Blue/>
           <Automated/>
           <Blog/>
           <GetStarted/>
           <NewFooter/>
      


            {/* <main className="hero">
                <HeroContent />
                <HeroImage />
            </main> */}


        </>
    );
}

export default App2;



