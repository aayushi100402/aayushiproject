import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCard from '../Components/Applycoupon';
import OutlinedCard from '../Components/Paymentdetails';
import FullWidthGrid from '../Components/Payment';
import AutoGrid from '../Components/mycartgrid';
import CustomizedSteppers from '../Components/stepperline';
import ComplexGrid2 from '../Components/item2';
import Grid from '@material-ui/core/Grid';




export default function Mycart() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>

        </p>
        <p>

        </p>

        <AutoGrid />
        <CustomizedSteppers />
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            Grocery
          </Grid>
        </Grid>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>

            <ComplexGrid2 />
          </Grid>
        </Grid>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <ComplexGrid2 />
          </Grid>
        </Grid>

        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <SimpleCard />
          </Grid>
        </Grid>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <OutlinedCard />
          </Grid>
        </Grid>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>
            <SimpleCard />
          </Grid>
        </Grid>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12} sm={12} xl={12}>

            <FullWidthGrid />
          </Grid>
        </Grid>



      </Container>

    </React.Fragment>
  );
}