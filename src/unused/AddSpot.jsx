import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  appContainer: {
    textAlign: 'center',
    display: 'flex',
    flexwrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
})

function AddSpot(props) {
  const { classes } = props;
  

  return (
    <div className={classes.root}>
      <Grid className={classes.appContainer} container >
        <Grid item xs={false} lg={2} style={{background: "blue"}}>
          
        </Grid>
        <Grid item xs={12} lg={8} style={{background: "yellow"}} >
        <Grid container >
            <Grid item xs={false} lg={2}  style={{background: "purple"}} >
            
          </Grid>
         
          <Grid item xs={6} lg={8}  style={{background: "orange"}} >
          
          </Grid>
          <Grid item xs={false} lg={2}  style={{background: "red"}} >
           
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