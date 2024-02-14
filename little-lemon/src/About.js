function About(){
    return(
        <section className="placeContainer">
            <div className="placeDescription">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className="placeImages">
                    <img src={require("../src/images/restaurantimg.png")} alt="restaurantdesc"/>
            </div>
          </section>
    )
}
export default About;