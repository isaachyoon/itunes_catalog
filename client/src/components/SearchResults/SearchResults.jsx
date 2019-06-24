import React from 'react';
import './SearchResults.css';
import { connect } from 'react-redux';
import TypeComponent from '../TypeComponent/TypeComponent';
import {tabs} from '../../actions';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateActiveTab(tab) {
    this.props.tabs({...this.props.itunes.tabs, activeTab: tab});
  }

  render() {
    const activeTab = (this.props.itunes && this.props.itunes.tabs) ? this.props.itunes.tabs.activeTab : '';
    const tabs = (this.props.itunes.tabs && this.props.itunes.tabs.activeTab) ? this.props.itunes.tabs.tabOptions.map((tab, key) => <button className={`kind-tab  ${this.props.itunes.tabs.activeTab === tab}`} onClick={(e)=> this.updateActiveTab(tab)} key={key}>{tab}</button>) : '';
    let typesComponent = (this.props.itunes.tabs && this.props.itunes.tabs.activeTab) ? <TypeComponent data={this.props.itunes.itunesData[activeTab]}></TypeComponent> : 'No Results Found';
    return (
      <div className="search-results">
        <div>
          {tabs}
        </div>
        {typesComponent}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { itunes: state.itunes }
}

export default connect(mapStateToProps, {tabs})(SearchResults);
