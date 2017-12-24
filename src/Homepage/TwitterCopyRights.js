import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';

const styles ={};

class TwitterCopyRights extends Component{
    render(){
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
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
                            <li className="smallLinks">&nbsp;Brand</li>
                            <li className="smallLinks">&nbsp;Blog</li>
                            <li className="smallLinks">&nbsp;Status</li>
                            <li className="smallLinks">&nbsp;Apps</li>
                            <li className="smallLinks">&nbsp;Jobs</li>
                            <li className="smallLinks">&nbsp;Marketing</li>
                            <li className="smallLinks">&nbsp;Businesses</li>
                            <li className="smallLinks">&nbsp;Developers</li>
                        </ul>
                    </Typography>
                </Grid>
                <div>
                
                </div>
                <Grid item style={{paddingTop:"20px"}}>
                    <Typography type="caption">
                    <Tooltip id="tooltip-dp" title="Advertise with Twitter" placement="top">
						<i class="fa fa-share-square-o" aria-hidden="true"></i>
					</Tooltip>	
						
						&nbsp;
                        <label className="advertiseLink">Advertise with Twitter</label>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TwitterCopyRights)
