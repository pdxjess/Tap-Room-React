import React from 'react';
import PropTypes from 'prop-types';

export default function NewKeg(props) {
  props.OnNewKeg({name: _name.value, brand: _brand.value, price: _price.value, ABV: _ABV.value, pintsLeft: _pintsLeft.value, id: v4() });
  _name.value = '';
    _brand.value = '';
    _price.value = '';
    _ABV.value = '';
    _pintsLeft = '';
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="name">Beer Name</label>
        <input placeholder="Beer Name" id="name" type="text" className="validate" ref={(input) => {_name = input;}}/>
        <label htmlFor="brand">Brewery Name</label>
        <input placeholder="Brewery Name" id="brand" type="text" className="validate" ref={(input) => {_brand = input;}}/>
        <label htmlFor="price">Price</label>
        <input placeholder="Price" id="price" type="text" className="validate" ref={(input) => {_price = input;}}/>
        <label htmlFor="ABV">ABV</label>
        <input placeholder="ABV" id="ABV" type="text" className="validate" ref={(input) => {_ABV = input;}}/>
        <label htmlFor="pintsLeft">Pints Left</label>
        <input placeholder="pintsLeft" id="pintsLeft" type="text" className="validate" ref={(input) => {_pintsLeft = input;}}/>
        <button type='submit'>Add New Keg</button>
      </form>
    </div>
  );
}

NewKeg.propType = {
  onNewKeg: PropTypes.func
};
