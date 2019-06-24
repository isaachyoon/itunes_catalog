import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import {itunesData, updateFavorite, createFavoriteHash} from '../../actions';
import { FaRegHeart, FaHeart } from "react-icons/fa";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async addToFavorite() {
    const response = await fetch('http://localhost:8000/favorite/addItem', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.data)
    });
    const content = await response.json();
    this.props.updateFavorite(content);
    this.props.createFavoriteHash(content);
  }



  async removeFromFavorite() {
    const response = await fetch('http://localhost:8000/favorite/removeItem', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: this.props.data.id})
    });
    const content = await response.json();
    this.props.updateFavorite(content);
    this.props.createFavoriteHash(content);
  }

  render() {
    const id = this.props.data.id;
    const heartStatus = (this.props.itunes.favoriteHash.has(id)) ? <FaHeart onClick={() => this.removeFromFavorite()} className='red'></FaHeart> : <FaRegHeart onClick={() => this.addToFavorite()}></FaRegHeart>
    return (
      <div className="card">
        <div className="inner-div">
          <div>
            {heartStatus}
          </div>
          <div className="img-div">
            <img src={this.props.data.artwork}/>
          </div>
          <label className="media-name">{this.props.data.name}</label>
          <p>{this.props.data.genre}</p>
          <a href={this.props.data.url}>Itunes</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {itunes: state.itunes}
}

export default connect(mapStateToProps, {itunesData, updateFavorite, createFavoriteHash})(Card);
