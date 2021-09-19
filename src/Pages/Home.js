import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Button';
import SwipeableTextMobileStepper from '../Components/carousel';
import AutoGridNoWrap from '../Components/Maxsavingdeal';
import SingleLineImageList from '../Components/Imagelist';






export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            </p>
            <p>
              
            </p>
              
            <ContainedButtons/>
            <SwipeableTextMobileStepper/>
            <SwipeableTextMobileStepper/>
            <SwipeableTextMobileStepper/>
            <AutoGridNoWrap/>
            <SingleLineImageList/>
            <AutoGridNoWrap/>
            <SwipeableTextMobileStepper/>
            <AutoGridNoWrap/>
            

            
            
          
            
            
        </Container>
    </React.Fragment>
  );
}