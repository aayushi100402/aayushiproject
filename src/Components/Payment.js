import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        
          <Paper
        
           className={classes.paper}>
               <Grid container spacing={0} align="left">
          <Grid item xs={12} sm={12} md={12} xl={12}>
           Rs50
           </Grid>
                </Grid>
        <Grid container spacing={0} align="right">
                    <Grid item xs={12} sm={12} md={12} xl={12}>

          <Button variant="contained" color="red">Make Payment</Button>
          </Grid>
                </Grid>
          </Paper>
          
      
    </div>
  );
}
