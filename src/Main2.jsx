import { StrictMode } from "react";          // StrictMode используется во время разработки и помогает замечать некоторые потенциальные проблемы в коде.
import { createRoot } from "react-dom/client";     // CreateRoot нужна, чтобы React смог подключиться к обычному HTML и начать отображать в нём React-компоненты.
//import Header2 from "./components/Header2.jsx";
import App2 from "./App2.jsx";    //Означает возьми компонент App2 из файла App2.jsx, чтобы я мог использовать его здесь»



// createRoot(document.getElementById("root")).render(
//   <Header2 />

// )
 createRoot(document.getElementById("root")).render(       // Это строка по сути связывает React с <div id="root"> из HTML.
  <StrictMode>          
    <App2 />
  </StrictMode>
                        // StrictMode просто помогает React проверять код во время разработки.
);
