import React, {Component} from 'react';
import NewsItemsList from '../componets/NewsItemsList';

const API_KEY = 'xKqCOD9vnLNt3Nr6wWyCpaR_43CqNChbdJGlyDODSdM';
var axios = require("axios").default;

let searchtopic = 'GPU'

var options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q: searchtopic, lang: 'en', sort_by: 'relevancy', page: '1'},
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
                <h1>title</h1>
                <NewsItemsList newsItems = {this.state.articles}/>
            </section>
        )
    }
}



export default Mainpage;


//            <NewsItemList newsItems = {DUMM_DATA["articles"][0]} /> 

