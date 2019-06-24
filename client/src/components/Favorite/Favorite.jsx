import React from 'react';
import './Favorite.css';
import { connect } from 'react-redux';
import {itunesData} from '../../actions';
import Card from '../Card/Card';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const favoriteCard = this.props.itunes.favorite.map((item, key) => <Card data={item} key={key}></Card>)
    return (
      <div className="favorite-container">
        {favoriteCard}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {itunes: state.itunes}
}

export default connect(mapStateToProps, {itunesData})(Favorite);
