import React from 'react';
import Container from '@material-ui/core/Container';
import ComplexGrid from '../Components/Items';
import SimpleCard from '../Components/Applycoupon';
import OutlinedCard from '../Components/Paymentdetails';
import BasicTimeline from '../Components/Timeline';
import FullWidthGrid from '../Components/Payment';
import AutoGrid from '../Components/mycartgrid';



export default function Mycart() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            </p>
            <p>
              
            </p>
                       
          <AutoGrid/>
            <BasicTimeline/>
            Grocery
            <ComplexGrid/>
            <ComplexGrid/>
            <br/>
            <SimpleCard/>
            <br/>
            <OutlinedCard/>
            <SimpleCard/>
            <br/>
            <FullWidthGrid/>
            
            
        </Container>
    </React.Fragment>
  );
}