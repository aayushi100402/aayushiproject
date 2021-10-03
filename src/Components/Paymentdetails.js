import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
     
      <Grid container spacing={2} align="center">
       <Grid item xs={12} sm={12} md={12} xl={12}>
        <Typography variant="h5" component="h2">
          Payment Details
        </Typography>
        </Grid>
          </Grid>
        <Grid container spacing={10} align="left">
       <Grid item xs={12} sm={12} md={12} xl={12}>
        <Typography className={classes.pos} color="textPrimary">
          MRP total
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          Product Discount
        </Typography>
        <Typography variant="body1" component="p">
          Total Amount
       
          -You Save $70
        </Typography>
        </Grid>
                </Grid>
                

      </CardContent>
      
    </Card>
  );
}
