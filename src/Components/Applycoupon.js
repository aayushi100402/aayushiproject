import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});
 {/* Apply coupon on mYcart page */}
export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid container spacing={1} align="left">
                    <Grid item xs={12} sm={12} md={12} xl={12}>
        <Typography variant="h5" component="h2">
          Apply Coupon
        </Typography>
        </Grid>
        </Grid>
        <Typography className={classes.pos} color="textSecondary">
          FLASH100
        </Typography>
             </CardContent>
      <CardActions>
      <Grid container spacing={0} align="right">
                    <Grid item xs={12} sm={12} md={12} xl={12}>

        <Button size="small">View All</Button>
        
        </Grid>
        </Grid>

      </CardActions>
      <CardActions>
      <Grid container spacing={0} align="right">
                    <Grid item xs={12} sm={12} md={12} xl={12}>
        <Button size="small">Remove</Button>
        </Grid>
                </Grid>
      </CardActions>
    </Card>
  );
}
