import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import apple from '../Assets/apple.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
 {/*Item cards */}
export default function ComplexGrid3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <Grid container spacing={0}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img src = {apple} className= "image" alt= "apple" height="100" width="100" align="left"/>

            </ButtonBase>
          </Grid>
          <Grid item xs={0} sm container align="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Apples-Shimla
                </Typography>
                <Typography variant="body2" gutterBottom>
                3pcs (500g approx)
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  In stock
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Rs 110.00
                </Typography>
              </Grid>
            </Grid>
          
            <Grid item xs container direction="column" spacing={0} align="right">
              <Grid item xs>
              <Button variant="round">
                     <AddCircleRoundedIcon/></Button>
               
              </Grid>
              <Grid item>
                <Button variant="round">
                     <RemoveRoundedIcon/></Button>
              </Grid>
            </Grid>
            
            
            
          </Grid>
        </Grid>
      
    </div>
  );
}
