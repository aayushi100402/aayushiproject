import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import {Link, } from "react-router-dom";

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

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Grid item xs={12}>
          
          <Paper className={classes.paper}>
     
       
           
         
          <Grid container spacing={1} align="left">
                    <Grid item xs={12} sm={12} md={12} xl={12}>
            <Link to={process.env.PUBLIC_URL + '/Home'}>
            <Button variant="outlined">
              <ClearIcon/>
              </Button>
              </Link>
            </Grid>
                </Grid>
                <Typography variant="h5" component="h2">
          MY CART
        </Typography>

           
          
</Paper>
        
      </Grid>
    </div>
  );
}
