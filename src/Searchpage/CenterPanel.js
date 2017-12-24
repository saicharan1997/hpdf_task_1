import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TwitterFeeds from './TwitterFeeds';

const styles ={};

class CenterPanel extends Component{
    render(){
        return(
            <Grid container direction="column">
                <Grid item>
                    <TwitterFeeds query={this.props.searchQuery}/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CenterPanel)
