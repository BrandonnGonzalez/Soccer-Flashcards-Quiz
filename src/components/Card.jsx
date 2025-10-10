const Card = ({question, answer, isFlipped, onCardClick}) => {
    return (
        <div className="card" onClick={onCardClick}>
            <div className="card-content">
                {!isFlipped ? (
                    <div className="card-front">
                        <h2>{question}</h2>
                    </div>
                ) : (
                    <div className="card-back">
                        <h3>Answer:</h3>
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;