import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import ComplexGrid2 from './item2--';
import Grid from '@material-ui/core/Grid';
import FloatingActionButtons from './Fab';
import CenteredGridi from './basicgriditem';
import CenteredGrid from './basicgridfooter';
import SpacingGrid from './Paper 3';
import Imp from './Imp1';
import Imp2 from './Imp 2';
import Imp3 from './Imp 3';
import Imp4 from './Imp 4';

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    backgroundColor:'	#fafafa'
    
  },
  bullet: {
    
    margin: '0 9px',
    transform: 'scale(0.8)',
   
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  
  },
});

export default function SimpleCardforitems4() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      
    <Card className={classes.root}>
       

      <CardContent>
           <Imp4/>
           

           </CardContent>
    
    </Card>
  );
}
