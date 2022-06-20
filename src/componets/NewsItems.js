import '../App.css';
 function NewsItems(props){
    return (
        <ul key = {props.key}>
        <div id = "item">
        <div>
                <img src = {props.image} alt = {props.title} id="pic"/>
            </div>
            <div id = "words">
                <h1>{props.title}</h1>
                <h3>{props.excerpt}</h3>
                <p>Rating: {props.rateScore}</p>
                <p>Source: {props.website}</p>
            </div>
        </div>         
        </ul>
    )
}

export default NewsItems;