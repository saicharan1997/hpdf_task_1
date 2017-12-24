import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles ={};

class TwitterCopyRights extends Component{
    render(){
        return(
            <Grid container style={{backgroundColor:"#e6ecf0"}} direction="column">
                <Grid item xs={12} style={{padding:0}}>
                    <Typography type="caption" style={{lineHeight:1.6}}>
                        <ul style={{listStyle:"none",paddingLeft:"6px"}}>
                            <li className="smallLinksTwitter">© 2017 Twitter</li>
                            <li className="smallLinks">&nbsp;About</li>
                            <li className="smallLinks">&nbsp;Help Center</li>
                            <li className="smallLinks">&nbsp;Terms</li>
                            <li className="smallLinks">&nbsp;Privacy Policy</li>
                            <li className="smallLinks">&nbsp;Cookies</li>
                            <li className="smallLinks">&nbsp;Ads info</li>
                        </ul>
                    </Typography>
                </Grid>
                
            </Grid>
        )
    }
}

export default withStyles(styles)(TwitterCopyRights)
