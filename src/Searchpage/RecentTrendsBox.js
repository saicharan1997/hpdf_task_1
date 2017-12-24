import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles ={};

class RecentTrendsBox extends Component{
    render(){
        
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title">
                                <b fontSize="18px">Trends for you</b>.
                            </Typography>
                        </Grid>
                        <Grid item style={{display:"flex",alignItems:"flex-end",paddingLeft:0}}>
                            <Typography type="caption" style={{color:"#1da1f2"}}>
                                <a fontSize="12px"className="textColorBlue" >Change</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #2GScamVerdict
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                23.2K Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #FodderScam
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                49.8K Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #RIL40
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                9,794 Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #PulseTheVenture
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                               1,326 Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #MaduraAudioLaunch
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                20.2K Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #Agnyathavasi
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                68.8K Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #ChristmasAtPhoenix
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                                6,337 Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                    <Grid container direction="column" style={{cursor:"pointer"}}>
                        <Grid item style={{paddingBottom:0}}>
                            <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600}} className="hoverLink">
                                #SantaAtMadurai
                            </Typography>
                        </Grid>
                        <Grid item style={{paddingTop:0}}>
                            <Typography type="caption">
                               2,326 Tweets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                
            </Grid>
        )
    }
}
export default withStyles(styles)(RecentTrendsBox)
