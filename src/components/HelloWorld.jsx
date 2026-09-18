import React from 'react';

function HelloWorld() {
    return <div> <h1>Hello, World!</h1>

        {/* const HelloWorld = () => {      // Со стрелочной функцией
                    return (        
        <div>
            <h1>Hello, World!</h1>
        </div>
        )   */}



             

        {<p>Now I want to tell you about myself
            My name is Rinat. I am 27 years old from Almaty. <br />
            What I love is sport because I play it for the most part of my life.
            But since this year I got interested in IT. It's pretty hard for me <br />
            because I never learned it before but I get better day by day. I mix it with sport
            so I don't burn out after hours spent in <br /> front of the laptop.
            Usually I walk outside in the morning and then study afternoon so
            I feel good.


        </p>
        }




    </div>


}

export default HelloWorld;      // export → сделать доступным из других файлов.
// import → подключить и использовать в другом файле.




// function HelloWorld() {
//   return <h1>Hello, World!</h1>;        // Эти две строчки это функция-компонент
// По сути React-компонент — это функция, которая возвращает JSX.
// }

// function App() {
//   return <HelloWorld />;       // <HelloWorld /> — это не сам текст Hello World. Это вызов/использование компонента, который возвращает этот текст.

// }