 function NewsItems(props){
    return (
        <ul key = {props.id}>
            <div>
                <img src = {props.image} alt = {props.title}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.excerpt}</p>
                <p>Rating: {props.rateScore}</p>
                <p>Source: {props.website}</p>
            </div>
        </ul>
    )
}

export default NewsItems;