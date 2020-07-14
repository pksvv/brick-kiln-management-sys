import React, { Component } from 'react';
import Search from './search';

class Home extends Component{

    constructor(){
        super()

        this.state = {
            news:JSON,
            filtered:JSON
        }
    }

    filterRecord(keywords){
        const output = this.state.news.filter((data) =>{
            return (data.title.toLowercase().indexOf(keywords.toLowercase())>-1);
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <div>

            </div>
        )
    }

}

export default Home;