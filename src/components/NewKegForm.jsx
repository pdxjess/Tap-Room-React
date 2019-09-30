import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _alcohol = null;
  let _brand = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();

    props.onAddingNewKeg({
      name: _name.value,
      alcohol: _alcohol.value,
      brand: _brand.value,
      price: _price.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>

        <input
          type='text'
          id='alcohol'
          placeholder='alcohol volume'
          ref={(input) => {_alcohol = input;}}/>

        <input
          type='text'
          id='brand'
          placeholder='brand'
          ref={(input) => {_brand = input;}}/>

        <input
          type='text'
          id='price'
          placeholder='price'
          ref={(input) => {_price = input;}} />

        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onAddingNewKeg: PropTypes.func,
};

export default NewKegForm;
