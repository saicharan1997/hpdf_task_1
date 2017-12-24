import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import UserProfileBox from './UserProfileBox';
import RecentTrendsBox from './RecentTrendsBox';

const styles ={};

class LeftSidePanel extends Component {
    render() {
        return(
            <Grid container direction="column" spacing={24}>
                <Grid item>
                    <UserProfileBox/>
                </Grid>
                <Grid item>
                    <RecentTrendsBox/>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(LeftSidePanel)
