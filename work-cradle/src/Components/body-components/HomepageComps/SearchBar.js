import React from 'react';
import { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super()

    this.State = {
      searchInput: ''
    }

  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    return(
      <>
        <div className="intro-banner-search-form margin-top-95">

          {/* <!-- Search Field --> */}
          <div className="intro-search-field">
            <label htmlFor ="intro-keywords" className="field-title ripple-effect">Looking for a Talent?</label>
            <i className="fas fa-search"></i>
            <input id="intro-keywords" type="text" placeholder="Enter Company Name or Skill Title" onChange={this.handleChange.bind(this)}/>
          </div>

          {/* <!-- Button --> */}
          <div className="intro-search-button">
            <button className="button ripple-effect">Search</button>
          </div>
        </div> 
      </>
    )
  }
}

export default SearchBar;