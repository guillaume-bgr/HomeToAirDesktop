function Card(props) {
    return (
        <div className={"card no-border " + props.className}>
            <div className="card-body">
                <div className="card-header">
                    <div className="card-headings">
                        <h2 className="title">{props.title}</h2>
                        <span className="subtitle">{props.subtitle}</span>
                    </div>
                </div>
                <div className="card-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Card;