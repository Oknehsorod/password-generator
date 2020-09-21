import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Password Generator</Typography>
      </Toolbar>
    </AppBar>
  );
};
