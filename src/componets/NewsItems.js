 function NewsItems(props){
    return (
        <ul key = {props.key}>
            <div>
                <img src = {props.image} alt = {props.title}/>
            </div>
            <div>
                <h1>{props.title}</h1>
                <h3>{props.excerpt}</h3>
                <p>Rating: {props.rateScore}</p>
                <p>Source: {props.website}</p>
            </div>
        </ul>
    )
}

export default NewsItems;