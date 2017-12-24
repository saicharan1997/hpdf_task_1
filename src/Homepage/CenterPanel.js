import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TweetBox from './TweetBox';
import TwitterFeeds from './TwitterFeeds';

const styles ={};

class  CenterPanel extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item>
                    <TweetBox/>
                </Grid>
                <Grid item>
                    <TwitterFeeds/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CenterPanel)
