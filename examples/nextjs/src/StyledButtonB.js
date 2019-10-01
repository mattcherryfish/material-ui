import React from 'react';
import { Button } from '@material-ui/core';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  button: {
    color: '#222',
    backgroundColor: 'cornsilk',
  },
};

const StyledButtonB = props => {
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      Cornsilk
    </Button>
  );
};

export default withStyles(styles)(StyledButtonB);
