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
import maggi from '../Assets/maggi.jpg'
import lays from '../Assets/lays.jpg'
import bread from '../Assets/bread.jpg'
import nana from '../Assets/nana.jpg'
import choco from '../Assets/choco.jpg'
import grapes from '../Assets/grapes.jpg'
import coffee from '../Assets/coffee.jpg'


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

export default function Imp9() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        <ButtonBase className={classes.image}>
            <img src = {coffee} className= "image" alt= "coffee" height="100" width="100" align="left"/>

            </ButtonBase>
        </Grid>
        <Grid item xs>
        <Typography gutterBottom variant="subtitle1">
                 Nescafe classic coffee
                </Typography>
                <Typography variant="body2" gutterBottom>
                 200 g (Dawn jar)
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  In stock
                </Typography>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Rs 495.00
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

