import React, { useContext } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, RaisedButton } from 'material-ui';

import FormDataContext from '../context/FormDataContext';

function SuccessPage() {
  const { resetForm } = useContext(FormDataContext);

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title='Success' />
          <div style={{ margin: '20px' }}>
            <h1>Thank You for your submisison</h1>
            <p>You will get an email with further instructions shortly.</p>
          </div>
        </div>
        <br />
        <RaisedButton
          label='Make another submission '
          primary={false}
          onClick={resetForm}
          style={styles.button}
        ></RaisedButton>
      </MuiThemeProvider>
    </div>
  );
}

export default SuccessPage;

const styles = {
  button: {
    margin: 15
  }
};
