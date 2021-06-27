import React from 'react';

const Spinner = () => {
  return (
    <div style={{display: `flex`, alignItems: `center`, justifyContent: `center`, height: `100vh`, width: `100%`}}>
      <img src="img/spinner.svg" alt="Загрузка" width="{200}" height="{200}" />
    </div>

  );
};


export default Spinner;
