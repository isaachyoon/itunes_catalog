import React from 'react';
import './DashBoard.css';
import { connect } from 'react-redux';
import {itunesData, mainTabs, updateFavorite, createFavoriteHash} from '../../actions';
import SearchResults from '../SearchResults/SearchResults';
import Favorite from '../Favorite/Favorite';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.fetchFavoriteItems();
  }

  async fetchFavoriteItems() {
    let res = await fetch(`http://localhost:8000/favorite/getItems`)
    let data = await res.json();
    this.props.updateFavorite(data);
    this.props.createFavoriteHash(data);
  }

  async updateActiveTab(tab) {
    if (tab === 'Favorite') {
      this.fetchFavoriteItems();
    }
    this.props.mainTabs({...this.props.itunes.mainTabs, activeTab: tab});
  }

  render() {
    const tabs = this.props.itunes.mainTabs.tabOptions.map((tab, key) =>
    <div
      className={`tab ${tab === this.props.itunes.mainTabs.activeTab}`}
      onClick={() => this.updateActiveTab(tab)}
      key={key}>{tab}
    </div>);
    const view = (this.props.itunes.mainTabs.activeTab === "Search Results") ? <SearchResults></SearchResults> : <Favorite></Favorite>
    return (
      <div className="container">
        <div className="tabs">
          {tabs}
        </div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {itunes: state.itunes}
}

export default connect(mapStateToProps, {itunesData, mainTabs, updateFavorite, createFavoriteHash})(DashBoard);
