import NewsItems from "./NewsItems";

function NewsItemsList (props) {

    return (
        <ul>
            {props.newsItems.map(data => (
                <NewsItems
                    title = {data.title}
                    link = {data.link}
                    website = {data.clean_url}
                    excerpt = {data.excerpt}
                    summary = {data.summary}
                    image = {data.media}
                    rateScore = {data._score}
                    id = {data._id}
                />
            ))}
        </ul>
    )
}

export default NewsItemsList;

