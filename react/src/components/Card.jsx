function Card(props) {
    
    return (
        <section id="gameselect">
            <article id="article1" >
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
            <button className="a-button" id={props.data.button}>Play</button>
            </article>    
        </section>
        )
    
}

export default Card

{/* <article id="article2">
<h2>Math Facts Practice:</h2>
<p>Fun and effective Math Practice, for all ages! A super fun way to sharpen your math skills and become a whiz with numbers! Ready for the challenge?</p>
<button className="a-button" id="play-b">Play</button>
</article> */}