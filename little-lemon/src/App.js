import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import BookingPage from './BookingPage.js';
import About from './About.js';
import Menu from './Menu.js';
import UnderConstruction from './UnderConstruction.js';

function App() {
  const specials=[
    {
      title:"Greek Salad",
      description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price:12.99,
      getImageSrc: () => require("../src/images/greek salad.jpg")
    },{
      title:"Bruchetta",
      description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price:5.99,
      getImageSrc: () => require("../src/images/bruchetta.png")
    },{
      title:"Lemon Dessert",
      description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price:5.00,
      getImageSrc: () => require("../src/images/lemon dessert.jpg")
    }
  ]
  return (
    <>
      <Header className="container"/>
      <Routes>
        <Route path="/" element={<Main specials={specials}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu specials={specials} title="Our entire menu"/>}/>
        <Route path="/booking-page" element={<BookingPage/>}/>
        <Route path="/order-online" element={<UnderConstruction/>}/>
        <Route path="/login" element={<UnderConstruction/>}/>
      </Routes>
      <Footer className="container"/>
      </>
  );
}

export default App;