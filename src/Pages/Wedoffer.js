import React from 'react';
import Container from '@material-ui/core/Container';

import TemporaryDrawer from '../Components/bottomdrawer';

import Wedcard from '../Components/Wedcard';

import Grid from '@material-ui/core/Grid';
import ComplexGrid2 from '../Components/item2';
import SimpleCardforitems from '../Components/blankcard';
import FloatingActionButtons from '../Components/Fab';










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

        <TemporaryDrawer />
       

          <Grid container spacing={1} align="center">
          <Grid item xs={12} sm={12} md={12} xl={12}>
        
          
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            <SimpleCardforitems/>
            


            <Grid/>
          </Grid>
        </Grid>












      </Container>
    </React.Fragment>
  );
}