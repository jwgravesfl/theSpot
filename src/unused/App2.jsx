import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  appContainer: {
    textAlign: 'center',
  },
});

function AddSpot(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid className={classes.appContainer} container >
        <Grid item xs={false} lg={2} style={{background: "blue"}}>
          
        </Grid>
        <Grid item xs={12} lg={8} style={{background: "yellow"}} >
        <Grid container >
            <Grid item xs={6} lg={3}  style={{background: "purple"}} >
            Cell A1
          </Grid>
          <Grid item xs={6} lg={3}  style={{background: "pink"}} >
            Cell A2
          </Grid>
          <Grid item xs={6} lg={3}  style={{background: "orange"}} >
            Cell A3
          </Grid>
          <Grid item xs={6} lg={3}  style={{background: "red"}} >
            Cell A4
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} lg={2} style={{background: "green"}}>
          
        </Grid>
      </Grid>
    </div>
  );
}

AddSpot.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddSpot);