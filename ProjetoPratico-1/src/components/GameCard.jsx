const GameCard = (props) => {
    return(
        <div>
            <img src={props.image} alt="image" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default GameCard