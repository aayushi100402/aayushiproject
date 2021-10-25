import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import biscuit from '../Assets/biscuit.jpg'

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

export default function Imp2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        <ButtonBase className={classes.image}>
            <img src = {biscuit} className= "image" alt= "biscuit" height="100" width="100" align="left"/>

            </ButtonBase>
        </Grid>
        <Grid item xs>
        <Typography gutterBottom variant="subtitle1">
                  Biscuits
                </Typography>
                <Typography variant="body2" gutterBottom>
                150g ( 1 packet )
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  In stock
                </Typography>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Rs 28.00
                </Typography>
        </Grid>
        <Grid item xs>
        <Grid item xs>
              <Button variant="round">
                     <AddCircleRoundedIcon/></Button>
               
              </Grid>
             
             
             
              <Grid item>
                <Button variant="round">
                     <RemoveRoundedIcon/></Button>
              </Grid>
              <Grid item>
                <Button variant="round">
                     <RemoveRoundedIcon/></Button>
              </Grid>
              <Grid item>
                <Button variant="round">
                     <RemoveRoundedIcon/></Button>
              </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
     
        
       
      </Grid>
    </div>
  );
}

