import Button from './Button'

function Card({ data }) {

    return (
        <section id="gameselect">
            {/* <article id="article1" >
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <Button url={data.src} />
            </article> */}

            <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <Button url={data.src} />
                    </div>
            </div>
        </section>
    )

}

export default Card

{/* <article id="article2">
<h2>Math Facts Practice:</h2>
<p>Fun and effective Math Practice, for all ages! A super fun way to sharpen your math skills and become a whiz with numbers! Ready for the challenge?</p>
<button className="a-button" id="play-b">Play</button>
</article> */}