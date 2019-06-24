import React from 'react';
import './TypeComponent.css';
import { connect } from 'react-redux';
import {itunesData} from '../../actions';
import Card from '../Card/Card';

class TypeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let card = (this.props.data) ? this.props.data.map((item, key) => <Card data={item} key={key}></Card>) : '';

    return (
      <div className="type-component">
        {card}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {itunes: state.itunes}
}

export default connect(mapStateToProps, {itunesData})(TypeComponent);
