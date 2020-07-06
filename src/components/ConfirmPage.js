import React, { useContext } from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, RaisedButton, List, ListItem } from 'material-ui';

import FormDataContext from '../context/FormDataContext';

function ConfirmPage() {
  const {
    firstName,
    lastName,
    email,
    occupation,
    bio,
    city,
    nextStep,
    prevStep
  } = useContext(FormDataContext);

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title='Confirm Details' />
          <List>
            <ListItem
              primaryText='First Name'
              secondaryText={firstName}
            ></ListItem>
            <ListItem
              primaryText='Last Name'
              secondaryText={lastName}
            ></ListItem>
            <ListItem primaryText='Email' secondaryText={email}></ListItem>
            <ListItem
              primaryText='Occupation'
              secondaryText={occupation}
            ></ListItem>
            <ListItem primaryText='City' secondaryText={city}></ListItem>
            <ListItem primaryText='Bio' secondaryText={bio}></ListItem>
          </List>
          <br />
          <RaisedButton
            label='Confirm & Continue'
            primary={true}
            onClick={nextStep}
            style={styles.button}
          ></RaisedButton>
          <RaisedButton
            label='Back'
            primary={false}
            onClick={prevStep}
            style={styles.button}
          ></RaisedButton>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default ConfirmPage;

const styles = {
  button: {
    margin: 15
  }
};
