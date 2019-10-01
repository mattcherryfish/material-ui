import React from 'react';
import Button from '@material-ui/core/Button/Button';
import withStyles from '@material-ui/styles/withStyles';

const styles = {
  button: {
    color: '#222',
    backgroundColor: 'aliceblue',
  },
};

const StyledButtonA = props => {
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      Aliceblue
    </Button>
  );
};

export default withStyles(styles)(StyledButtonA);
