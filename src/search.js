import React, { Component } from 'react';
import './search.css';

class Search extends Component{
    constructor(){
        super()

        /*this.state={
            keyword="User Text Here..."
        }*/
    }

    handleChange = (event) => {
        this.setState({keyWord:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        return(
            <div class="container">
                <h4>search.js</h4>
                <label className="search-label" htmlFor="search-input">
                    <input type="text" placeholder="Enter Bhatta Name and Docs..." onChange={this.handleChange}></input>
                </label>
            </div>
        )
    }
}

export default Search;