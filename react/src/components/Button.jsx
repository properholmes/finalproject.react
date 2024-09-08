function Button({url}) { 



    return (
        // <button onClick={handleClick}>Play</button>
        <a className="btn btn-primary" href={url} target="_blank">Play</a>
    )
}

export default Button