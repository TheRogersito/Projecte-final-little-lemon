function Special(prompt){
    return(
        <div className="specialSection">
            <img src={prompt.imageSrc} className="specialPhoto" alt="special plate"/>
            <div className="specialAndPrice">
                <h3>{prompt.title}</h3>
                <p>${prompt.price}</p>
            </div>
            <p>{prompt.description}</p>
            <p>Order a delivery</p>
        </div>
    )
}
export default Special