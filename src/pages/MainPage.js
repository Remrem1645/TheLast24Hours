import React, {Component} from 'react';
import NewsItemsList from '../componets/NewsItemsList';
var axios = require("axios").default;
const API_KEY = process.env.REACT_APP_API_KEY;

let searchtopic = 'GAMING'

var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: searchtopic, lang: 'en', sort_by: 'relevancy', page: '1', countries: 'US'},
    headers: {
      'x-api-key': API_KEY
    }
};

class Mainpage extends Component {
    state = {
        articles: []
    }

    constructor() {
        super();
        axios.request(options).then(response => {
            console.log(response.data);
            this.setState({articles: response.data["articles"]});
        })
        .catch(function (error) {
            console.error(error);
        });

    }

    render(){
        return ( 
            <section>
                <h1>title</h1>
                <NewsItemsList newsItems = {this.state.articles}/>
            </section>
        )
    }
}

export default Mainpage;
