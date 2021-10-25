import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button';
import SwipeableTextMobileStepper from '../Components/Carousel 1';
import AutoGridNoWrap from '../Components/Maxsavingdeal';
import SingleLineImageList from '../Components/Imagelist';
import Carousel2 from '../Components/Carousel 2';
import CenteredGrid from '../Components/basicgridfooter';
import Grid from '@material-ui/core/Grid';
import Carousel3 from '../Components/Carousel 3';
import Carousel4 from '../Components/Carousel 4';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            </p>
            <p>
              
            </p>
         {/*category buttons on home page*/}
        
            <ContainedButtons/>
            
            <Grid container spacing={2}align= 'center'>
           <Grid item xs={12}sm={12}xl={12}>
            <SwipeableTextMobileStepper/>
            <Carousel2/>
            <Carousel3/>
            <AutoGridNoWrap/>
            <SingleLineImageList/>
            <AutoGridNoWrap/>
            <Carousel4/>
            <AutoGridNoWrap/>
            <CenteredGrid/>
            </Grid>
            </Grid>
          
            
            
         
       
        </Container> 
        
              
    </React.Fragment>
  );
  
}
