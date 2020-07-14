import React, { Component } from 'react';
import Display2 from './display2';
import './search.css';
import Search from './search';

const url = 'http://127.0.0.1:8080';

class API extends Component{
    constructor(){
        super()
        this.state = {
            myarr:[],
            updateeval:"Initial Value"
        }
    }

    handleChange = (event) => {
        this.setState({updateval:event.target.value})
    }

    filterNews(keywords){
        const output = this.state.myarr.filter((data) => {
            return (data.name.toLowerCase().indexOf(keywords.toLowerCase())>-1)
        })

        this.setState({filtered:output})
    }

    render(){
        //console.log(this.state.myarr)
        return(
            <div class="container">
                <h3>api.js</h3>
                {/*<label className="search-label" htmlFor="search-input">
                    <input type="text" placeholder="Enter Bhatta and Document Name" onChange={this.handleChange}></input>
                <h2>{this.state.updateeval}</h2>
                </label>*/}
                <Search userText={(data)=> {this.filterNews(data)}}></Search>
                <Display2 userdata={this.state.filtered}></Display2>
            </div>
            )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => 
            this.setState({myarr:data}))
    }
}

export default API;