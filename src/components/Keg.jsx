import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {

  var BackgroundStyle = {
    backgroundColor: '#484848',
    color: 'white',
  }
  return (
    <div>
      <div style={BackgroundStyle}>
        <hr/>
        <h3>Name: {props.name}</h3>
        <h3>Alcohol Volume:  {props.alcohol}</h3>
        <h3>Brand: {props.brand}</h3>
        <h3>Price: {props.price}</h3>
        <hr/>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  alcohol: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

export default Keg;
