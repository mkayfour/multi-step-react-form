import React, { useContext } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, TextField, RaisedButton } from 'material-ui';

import FormDataContext from '../context/FormDataContext';

function FormPersonalDetails(props) {
  const context = useContext(FormDataContext);

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title='Enter Peronsal details' />
          <TextField
            hintText='Enter your occupation'
            floatingLabelText='Occupation'
            defaultValue={context.occupation}
            onChange={(e) => {
              context.setOccupation(e.target.value);
            }}
          />
          <br />
          <TextField
            hintText='Enter your city name'
            floatingLabelText='City'
            defaultValue={context.city}
            onChange={(e) => {
              context.setCity(e.target.value);
            }}
          />
          <br />
          <TextField
            hintText='Enter bio'
            floatingLabelText='Bio'
            defaultValue={context.bio}
            onChange={(e) => {
              context.setBio(e.target.value);
            }}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            onClick={context.nextStep}
            style={styles.button}
          ></RaisedButton>
          <RaisedButton
            label='Back'
            primary={false}
            onClick={context.prevStep}
            style={styles.button}
          ></RaisedButton>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default FormPersonalDetails;

const styles = {
  button: {
    margin: 15
  }
};
