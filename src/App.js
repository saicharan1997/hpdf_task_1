import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TwitterAppBar from './Homepage/TwitterAppBar';
import LeftSidePanel from './Homepage/LeftSidePanel';
import CenterPanel from './Homepage/CenterPanel';
import RightSidePanel from './Homepage/RightSidePanel';
import './App.css';


const styles={
  dummyHeight:{
      height:"10em"
  }
};


class App extends Component {
  render() {
      const classes = this.props.classes;
    return (
        <Grid container justify="center" spacing={24} style={{marginTop:"30px"}}>
            <Grid item xs={12}>
                 <TwitterAppBar/>
            </Grid>
            <Grid item xs={9}>
                <Grid container spacing={24}>
                    <Grid item xs={3} className={classes.dummyHeight}>
                        <LeftSidePanel/>
                    </Grid>
                    <Grid item xs={6} className={classes.dummyHeight} >
                        <CenterPanel/>
                    </Grid>
                    <Grid item xs={3} className={classes.dummyHeight}>
                        <RightSidePanel/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(App);
