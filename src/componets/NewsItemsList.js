import NewsItems from "./NewsItems";
import '../App.css';

function NewsItemsList (props) {

    return (
        <ul id = "list">
            {props.newsItems?.map(data => (
                <NewsItems
                    key = {data._id}
                    title = {data.title}
                    link = {data.link}
                    website = {data.clean_url}
                    excerpt = {data.excerpt}
                    summary = {data.summary}
                    image = {data.media}
                    rateScore = {data._score}
                />
            ))}
        </ul>
    )
}

export default NewsItemsList;

