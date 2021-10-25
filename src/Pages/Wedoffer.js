import React from 'react';
import Container from '@material-ui/core/Container';
import TemporaryDrawer from '../Components/bottomdrawer';
import Wedcard from '../Components/Wedcard';
import Grid from '@material-ui/core/Grid';
import SimpleCardforitems from '../Components/Blankcard1';
import SimpleCardforitems2 from '../Components/Blanckcard 2';
import SimpleCardforitems3 from '../Components/Blankcard 3';
import SimpleCardforitems4 from '../Components/blanckcard 4';
import SimpleCardforitems5 from '../Components/Blanckcard 5';
import SimpleCardforitems6 from '../Components/Blankcard 6';
import SimpleCardforitems7 from '../Components/Blankcard 7';
import SimpleCardforitems8 from '../Components/Blankcard 8';
import SimpleCardforitems9 from '../Components/Blankcard 9';
import SimpleCardforitems10 from '../Components/Blankcard 10';
import SwipeableTemporaryDrawer2 from '../Components/Bottomdrawerr';
import Filter from '../Components/Filter';











export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>

        <Grid container spacing={1} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Wedcard />
          </Grid>
        </Grid>
        <Grid container spacing={1} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            Grocery
          </Grid>
        </Grid>
        <Grid container spacing={1} align="left">
        
    <SwipeableTemporaryDrawer2/>
    </Grid>
       
        <Grid container spacing={1} align="right">
          
    <Filter/>
    </Grid>
       

     
        
        <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems/>
            </Grid>
        </Grid>
        <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems2/>
            </Grid>
        </Grid>
        <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems3/>
            </Grid>
        </Grid>
        <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
           <SimpleCardforitems4/>
           </Grid>
        </Grid>
           <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems5/>
            </Grid>
        </Grid>
            <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems6/>
            </Grid>
        </Grid>
            <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems7/>
            </Grid>
        </Grid>
            <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems8/>
            </Grid>
        </Grid>
            <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems9/>
            </Grid>
        </Grid>
            <Grid container spacing={3} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <SimpleCardforitems10/>
            </Grid>
        </Grid>
            
      
       



      </Container>
    </React.Fragment>
  );
}