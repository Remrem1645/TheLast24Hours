import '../App.css';
import styles from './NewsItemsList';

function NewsItems(props) {

    document.addEventListener('animationstart', function (e) {
        if (e.animationName === 'fade-in') {
            e.target.classList.add('did-fade-in');
        }
    });

    document.addEventListener('animationend', function (e) {
        if (e.animationName === 'fade-out') {
            e.target.classList.remove('did-fade-in');
        }
    });

    return (
        <ul key={props.key} onClick={props.link}>
            <a target="_blank" rel="noopener noreferrer" href={props.link}>
                <div id="item" >
                    <img src={props.image} alt={props.title} id="pic" />
                    <div id="words">
                        <h1>{props.title}</h1>
                        <div id="content">
                            <h3>{props.excerpt}</h3>
                            <p>Source: {props.website}</p>
                        </div>
                    </div>
                </div>
            </a>
        </ul>
    )
}

export default NewsItems;