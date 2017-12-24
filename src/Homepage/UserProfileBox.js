import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import 'font-awesome/css/font-awesome.min.css';

const styles ={	
	uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class UserProfileBox extends Component{
    render(){
        
        return(
            <Grid container direction="column">
                <Grid item style={{backgroundColor:"#1da1f2",height:"6em"}}>
                    <Tooltip id="tooltip-dp" title="Add a profile photo" placement="top">
                        <Button fab color="primary" style={{marginTop:"4em","border": "3px solid",boxShadow:"none",width:"70px",height:"70px",backgroundColor:"rgb(29, 161, 242)"}}>
                            <i className="fa fa-2x fa-camera" aria-hidden="true">
                             <input type="file" style={styles.uploadInput} />
                            </i>
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item style={{backgroundColor:"#ffffff"}}>
                    <Grid container>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography type="title">
                                        <b><a className="textColorBlack" style={{fontSize:"18px"}} href="#!">Saicharan</a></b>
                                    </Typography>
                                    <Typography type="caption" style={{color:"#657786"}}>
                                        @<a style={{fontSize:"14px"}} className="textColorLowBlack" href="#!">saai143</a>
                                    </Typography>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container justify="center">
                                <Grid item xs={0}>
                                    <Grid container direction="column" >
                                        <Grid item>
                                            <Tooltip id="tooltip-dp" title="4 Tweets"  placement="top">
                                            <Typography type="body2" style={{fontWeight:600,color:"#657786",fontSize:"12px"}}>
                                                <label className="tweetStats">Tweets<div style={{fontWeight:600,fontSize:"18px",color:"#1da1f2"}}>4</div></label>
                                            </Typography>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Tooltip id="tooltip-dp" title="24 Following"  placement="top">
                                            <Typography type="body2" style={{fontWeight:600,color:"#657786",fontSize:"12px"}}>
                                                <label className="tweetStats">Following<div style={{fontWeight:600,fontSize:"18px",color:"#1da1f2"}}>24</div></label>
                                            </Typography>
                                            </Tooltip>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Tooltip id="tooltip-dp" title="5 Followers"  placement="top">
                                            <Typography type="body2" style={{fontWeight:700,color:"#657786",fontSize:"12px"}}>
                                                <label className="tweetStats">Followers<div style={{fontWeight:600,fontSize:"18px",color:"#1da1f2"}}>5</div></label>
                                            </Typography>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(UserProfileBox)
