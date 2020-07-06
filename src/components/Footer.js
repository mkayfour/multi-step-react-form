import React from 'react';

var style = {
  backgroundColor: '#F8F8F8',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '2px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '50px',
  width: '100%',
};

var phantom = {
    position: 'absolute',
  display: 'block',
  padding: '10px',
  height: '20px',
  width: 'auto'
};

function Footer() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <h3>Made by Mohit Kumar</h3>
      </div>
    </div>
  );
}

export default Footer;
