import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import UserSearchBox from './UserSearchBox';
import RecentTrendsBox from './RecentTrendsBox';
import TwitterSuggestions from './TwitterSuggestions';
import TwitterCopyRights from './TwitterCopyRights';

const styles ={};

class LeftSidePanel extends Component {
    render() {
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <UserSearchBox/>
                </Grid>
                <Grid item>
                    <TwitterSuggestions/>
                </Grid>
                <Grid item>
                    <RecentTrendsBox/>
                </Grid>
                <Grid item>
                    <TwitterCopyRights/>
                </Grid>
                
            </Grid>
        )
    }
}
export default withStyles(styles)(LeftSidePanel)
