import React, { useContext } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, TextField, RaisedButton } from 'material-ui';

import FormDataContext from '../context/FormDataContext';

function FormUserDetails(props) {
  const context = useContext(FormDataContext);

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title='Enter user details' />
          <TextField
            hintText='Enter your first name'
            floatingLabelText='First Name'
            defaultValue={context.firstName}
            onChange={(e) => {
              context.setFirstName(e.target.value);
            }}
          />
          <br />
          <TextField
            hintText='Enter your Last name'
            floatingLabelText='Last Name'
            defaultValue={context.lastName}
            onChange={(e) => {
              context.setLastName(e.target.value);
            }}
          />
          <br />
          <TextField
            hintText='Enter your email'
            floatingLabelText='Email'
            defaultValue={context.email}
            onChange={(e) => {
              context.setEmail(e.target.value);
            }}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            onClick={context.nextStep}
            style={styles.button}
          ></RaisedButton>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default FormUserDetails;

const styles = {
  button: {
    margin: 15
  }
};
