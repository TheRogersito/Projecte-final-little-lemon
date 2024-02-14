import Testimonial from "./Testimonial.js";
import About from "./About.js";
import Menu from "./Menu.js";

function Main(props) {
  const testimonials=[
    {
      rating:5,
      name:"Jane",
      review:"Amazing place for vegans",
      getImageSrc: () => require("../src/images/testi1.png")
    },{
      rating:4.5,
      name:"Mark",
      review:"The food tasted great, but I had to wait for too much time",
      getImageSrc: () => require("../src/images/testi2.png")
    },{
      rating:4.7,
      name:"Carla",
      review:"My opinions on this place is getting better each time I come",
      getImageSrc: () => require("../src/images/testi3.png")
    },{
      rating:5,
      name:"Solaire",
      review:"It praises the sun like nobody else did before",
      getImageSrc: () => require("../src/images/testi4.png")
    }
  ]
    return (
      <>
        <main>
          <section className="heroSection container">
            <div>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="yellowButton">Reserve a Table</button>
            </div>
            <div></div>
            <div>
              <img src={require('../src/images/restaurantfood.jpg')} alt="restaurant food"></img>
            </div>
          </section>
          <Menu specials={props.specials} title="Specials"/>
          <section className="testimonialsContainer">
                <h2>Testimonials</h2>
                <div className="testimonialBoxes">
                  {testimonials.map((testi)=>(
                    <Testimonial
                    key={testi.name}
                    name={testi.name}
                    rating={testi.rating}
                    review={testi.review}
                    imageSrc={testi.getImageSrc()}
                    />
                  ))}
                </div>
          </section>
          <About/>
        </main>
      </>
    );
  }
export default Main;