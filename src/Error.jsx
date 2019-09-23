import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error(props){
  return (
    <div>
    <h1> This page {props.location.pathname} does not exist</h1>
    <h2>Please <Link to='/'>click here</Link> to return to the main page</h2>
    </div>

  );
}

Error.PropTypes = {
  location: PropTypes.object
};

export default Error;
