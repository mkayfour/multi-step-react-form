import React from 'react';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';

function SuccessPage() {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title='Success' />
          <h1>Thank You for your submisison</h1>
          <p>You will get an email with further instructions shortly.</p>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default SuccessPage;
