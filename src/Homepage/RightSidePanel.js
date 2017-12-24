import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TwitterSuggestions from './TwitterSuggestions';
import TwitterCopyRights from './TwitterCopyRights';

const styles ={};

class RightSidePanel extends Component{
    render() {
        return (
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <TwitterSuggestions/>
                </Grid>
                <Grid item>
                    <TwitterCopyRights/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(RightSidePanel)
