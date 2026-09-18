import React from "react";


function Fav() {
    return (
        <div>
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <Header />
                <h2>Favorites!</h2>
                <p>Welcome to this page again</p>
                <p>This is a basic example of a React page with a header, main content, and footer.</p>
                <p>React makes it easy to build reusable components for your interface.</p>
                <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', marginTop: '15px' }}>
                    Learn More and more!
                </button>
            </main>
                <Footer/>
        </div >
    );
}


export default Fav;