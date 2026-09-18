// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Main from './pages/Main';
// import Fav from './pages/Fav';
import Footer from './components/Footer';


function App() {

  const name = "React";
  const isLoggedIn = true;
  const isReady = false;
  const isSignedUp = true;
  const myName = "Rina";




  const greeting = (
    <h1>
      {isLoggedIn ? "Welcome back!" : "Please sign in."}
    </h1>
  )


  const readiness = (
    <h1>
      {isReady ? "Let's go!" : "Keep working!"}
    </h1>
  )


  const registration = (
    <h1>
      {isSignedUp ? "Please, Welcome!" : "Sign up first"}
    </h1>
  )




  const element = <label htmlFor="inputId">Name:</label>;

  const secondElement = <label htmlFor="inputId">secondName</label>;

  const thirdElement = <label htmlFor="inputId">thirdName</label>




  return (
    <div>
      {/* <HelloWorld /> */}

      <Header />
      <Main />
      {/* <Fav /> */}
      <Footer />









      {/* { <h1>Hello, {name}!</h1> } */}


      {/* 
      <h1>Welcome to My First React App</h1>
      <p>This is a simple React page built using a single component.</p>
      <footer>© 2024 My React App</footer>
 */}



      {/* {greeting}

      {readiness}

      <p>This is readiness.</p>


      {registration}

      <p>You have been signed up</p>


      <p>My name is {myName}</p>


      <div className="input-group">
        {element}
        <input id="inputId" type="number" />
      </div>

      <div className="input-group">
        {secondElement}
        <input id="inputId" type="password" />
      </div>

      <div className="input-group">
        {thirdElement}
        <input id="inputId" type="text" />
      </div>



 */}



    </div >





  )










}

export default App



//const [count, setCount] = useState(0)



//
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>






// < header style = {{ backgroundColor: '#4CAF50', padding: '10px', color: 'white', textAlign: 'center' }}>
//   <h1>My Simple React App</h1>
//     </header >


//     <main style={{ padding: '20px', textAlign: 'center' }}>
//       <h2>Welcome!</h2>
//       <p>This is a basic example of a React page with a header, main content, and footer.</p>
//       <p>React makes it easy to build reusable components for your interface.</p>
//     </main>


//     <main style={{
//       backgroundColor: 'yellow',
//       fontSize: '23px',
//       fontWeight: '900',
//       padding: '5px'
//     }}></main>



//      <footer style={{ backgroundColor: '#333', padding: '10px', color: 'white', textAlign: 'center', marginTop: '20px' }}>
//       <p>© 2024 My Simple React App</p>
//     </footer>
