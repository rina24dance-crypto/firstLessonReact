import bigPink1 from "../assets/bigPink1.svg";
import bigBlue1 from "../assets/bigBlue1.svg";
import bigYellow1 from "../assets/bigYellow1.svg";


function Blog() {
    return (
        <div className="allBlock4">



            <div className="upperBlog">

                <div className="smarter">Get smarter, with our blog.</div>

                <a href= '#' className="posts">
                    See all posts
                </a>


            </div>



            <div className="downBlog">

              
                <div className="pink">


                    <img src={bigPink1} alt="pink" />

                    <div className="improvements">Improvements</div>

                    <div className="phone">Automating Daily Tasks from Your Phone</div>

                    <div className="anotherText">Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</div>

                    <div className="date">April 24, 2022</div>



                </div>



                <div className="blue">

                    <img src={bigBlue1} alt="blue" />

                    <div className="tips">Tips & Tricks</div>

                    <div className="group">Can You Automate Group Learning?</div>

                    <div className="anotherText">Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</div>

                    <div className="date">April 24, 2022</div>

                </div>



                <div className="yellow">

                    <img src={bigYellow1} />

                    <div className="news">News</div>

                    <div className="investors">Our $3,000,000 B Round Investors</div>

                    <div className="anotherText">Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus.</div>

                    <div className="date">April 24, 2022</div>



                </div>


            </div>



        </div>
    )
}





export default Blog;