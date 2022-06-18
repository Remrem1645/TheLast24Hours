import React, {Component} from 'react';

const API_KEY = 'WcWfxRP9t75ZjhQ85zVXz0K6mJscmo3KCzUgRi9G_PM';
var axios = require("axios").default;


var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
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

    }


    render(){
        return ( 
            <section>
                <h1>titles</h1>
                {this.state.articles.map(article =><h1 key = {article.id}> {article.title} </h1>)}
            </section>
        )
    }
}



export default Mainpage;


//            <NewsItemList newsItems = {DUMM_DATA["articles"][0]} /> 

