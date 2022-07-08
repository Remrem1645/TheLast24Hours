import React, { Component } from 'react';
import NewsItemsList from '../componets/NewsItemsList';
import '../App.css';

var axios = require("axios").default;
const API_KEY = process.env.REACT_APP_API_KEY;

let searchtopic;

try {
    searchtopic = (localStorage.getItem('userDataString')) + '';
} catch {
    searchtopic = 'tech';
}


console.log(searchtopic)



var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: { q: `${searchtopic.substring(1 , (searchtopic.length - 1))}`, lang: 'en', sort_by: 'relevancy', page: '1', countries: 'US' },
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
            this.setState({ articles: response.data["articles"] });
        })
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        return (
            <section>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@600&display=swap" rel="stylesheet"></link>
                <h1 id="head">So, what's happening?</h1>
                <NewsItemsList newsItems={this.state.articles} id="list" />
            </section>
        )
    }
}

export default Mainpage;
