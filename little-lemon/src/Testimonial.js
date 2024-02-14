function Testimonial(prompt){
    return(
    <div className="testimonialBox">
        <p>Rating: {prompt.rating}/5</p>
        <div className="testiFotoName">
            <img src={prompt.imageSrc} alt={prompt.name}/>
            <p>{prompt.name}</p>
        </div>
        <p>{prompt.review}</p>
    </div>
    )
}
export default Testimonial;