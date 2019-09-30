import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <hr/>
      <h3>Name: {props.name}</h3>
      <h3>Flavor:  {props.flavor}</h3>
      <h3>Brand: {props.brand}</h3>
      <h3>Price: {props.price}</h3>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};

export default Keg;
