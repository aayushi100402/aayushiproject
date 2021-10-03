import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar'
import {Link, Router} from "react-router-dom";
import logo from './../Assets/logo.svg';



export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="sticky" style={{backgroundcolor:"red"}}>
        
        <Toolbar>
            <Link to={process.env.PUBLIC_URL + '/home'}>
                <IconButton>
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>
                
            </Link>
           
            
         
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
