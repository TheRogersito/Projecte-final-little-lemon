import Special from "./Special.js";

function Menu(props){
    return(
        <section className="highlights container">
            <div className="specials">
              <h2>{props.title}</h2>
              <button className="yellowButton">Online Menu</button>
            </div>
            <div className="specialItems">
              {props.specials.map((special)=>(
                <Special
                  key={special.title}
                  title={special.title}
                  description={special.description}
                  price={special.price}
                  imageSrc={special.getImageSrc()}
                />
              ))}
            </div>
          </section>
    )
}
export default Menu;