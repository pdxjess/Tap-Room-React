import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

  return (
    <div>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          flavor={keg.flavor}
          brand={keg.brand}
          price={keg.price}
          image={keg.image}
          key={index} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;
