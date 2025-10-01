const Card = ({question, answer, isFlipped, onCardClick}) => {
    return (
        <div className="card" onClick={onCardClick}>
            <div className="card-content">
                {!isFlipped ? (
                    <div className="card-front">
                        <h2>{question}</h2>
                        <p className="hint">Click to reveal answer</p>
                    </div>
                ) : (
                    <div className="card-back">
                        <h3>Answer:</h3>
                        <p>{answer}</p>
                        <p className="hint">Click to see question</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;