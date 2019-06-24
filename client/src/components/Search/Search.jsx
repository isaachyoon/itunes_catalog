import React from 'react';
import './Search.css';
import { connect } from 'react-redux';
import {itunesData, tabs} from '../../actions';
import { FaSearch } from "react-icons/fa";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  format(str) {
    return str.replace(/\s/g, '+');

  }

  async queryItunes(e) {
    e.preventDefault();
    const queryStr = e.target.parentNode.querySelector('.search-bar').value;
    const formattedQuery = this.format(queryStr);
    let res = await fetch(`http://localhost:8000/search?term=${formattedQuery}`);
    let data = await res.json();
    this.props.itunesData(data);
    if (this.props.itunes && this.props.itunes.itunesData) {
      let tabOptions = Object.keys(this.props.itunes.itunesData);
      const activeTab = tabOptions[0];
      this.props.tabs({tabOptions, activeTab});
    }
  }

  render() {
    return (
      <form className="search-container" onSubmit={(e) => this.queryItunes(e)}>
        <input className="search-bar" placeholder="enter search term..."></input>
        <FaSearch className="search-button" onClick={(e) => this.queryItunes(e)}></FaSearch>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {itunes: state.itunes}
}

export default connect(mapStateToProps, {itunesData, tabs})(Search);
