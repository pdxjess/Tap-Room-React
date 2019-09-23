import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Beer() {
  return (
    <div>
      <div class="beer-box">
        <h3>Kegs on tap</h3>
        <h4>{props.brand}</h4>
        <h4>{props.name}</h4>
        <h4>{props.ABV}</h4>
        <h4>{props.price}</h4>
        <h4>Pints Left: {props.pintsLeft}</h4>
        <button>Buy</button>
      </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  ABV: PropTypes.string,
  pintsLeft: PropTypes.number
};

export default Beer;
