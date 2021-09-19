import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';




const useStyles = makeStyles({
    root: {
        minWidth: 15,
    },
    bullet: {
        display: 'inline-block',
        margin: '0.1px',
        transform: 'scale(0.3)',
    },
    title: {
        fontSize: 1800,
    },
    pos: {
        marginBottom: 10,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;


    return (
        <Card className={classes.root}>
            <CardContent>
Wednesday Offer
            </CardContent>
            
            <CardActions>
                                
                <Button size="small">

                </Button>
               

                <Button variant="outlined"><ClearIcon/></Button>
                

            </CardActions>
        </Card>











    );
}