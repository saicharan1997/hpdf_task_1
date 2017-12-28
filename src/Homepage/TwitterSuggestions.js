import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import fpp1 from '../assets/images/profilepic/f1.jpg';
import fpp2 from '../assets/images/profilepic/f2.jpg';
import fpp3 from '../assets/images/profilepic/f3.jpg';
import fpp4 from '../assets/images/profilepic/f4.jpg';

const styles ={
    followButton:{
        color: "#1da1f2",
        padding: 0,
        minHeight: "32px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px"
    }
};

class TwitterSuggestions extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container style={{backgroundColor:"#ffffff"}} direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography type="title">
                                <b fontSize="18px">Who to follow</b>
                            </Typography>
                        </Grid>
                        <Grid item style={{display:"flex",alignItems:"flex-end",paddingLeft:0}}>
                            <Typography type="caption">
                                <a className="textColorBlue">Refresh</a>
                                &nbsp; 
                                <a className="textColorBlue">View all</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item style={{cursor: "pointer"}}>
                                  <Avatar src={fpp1} size={50}/>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe">
                                                      <b>Amit Shah</b>
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption">
                                                      @AmitShah
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{cursor: "pointer",display:"flex",alignItems:"center",paddingLeft:20}}>
                                                  <i class="fa fa-close" aria-hidden="false" style={{fontSize:"10px",marginLeft:20,fontWeight:200,color:"grey"}}></i>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                      
                                      <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                
                
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item style={{cursor: "pointer"}}>
                                  <Avatar src={fpp2} size={50}/>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe">
                                                      <b>Firstpost</b>
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption">
                                                      @Firstpost&nbsp;
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{cursor: "pointer",display:"flex",alignItems:"center",paddingLeft:32}}>
                                                  <i class="fa fa-close" aria-hidden="false" style={{fontSize:"10px",marginLeft:20,fontWeight:200,color:"grey"}}></i>
                                              </Grid>
                                              
                                          </Grid>
                                      </Grid>
                                      
                                      <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                
                
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item style={{cursor: "pointer"}}>
                                  <Avatar src={fpp3} size={50}/>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe">
                                                      <b>Zee News</b>
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption">
                                                      @ZeeNews
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{cursor: "pointer",display:"flex",alignItems:"center",paddingLeft:26}}>
                                                  <i class="fa fa-close" aria-hidden="false" style={{fontSize:"10px",marginLeft:20,fontWeight:200,color:"grey"}}></i>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                      
                                      <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                
                <Grid item>
                  <Grid container>
                      <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                          <Grid container>
                              <Grid item style={{cursor: "pointer"}}>
                                  <Avatar src={fpp4} size={50}/>
                              </Grid>
                              <Grid item>
                                  <Grid container direction="column">
                                      <Grid item style={{paddingBottom:0}}>
                                          <Grid container>
                                              <Grid item>
                                                  <Typography type="body2" className="followMe">
                                                      <b>News18</b>
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                                  <Typography type="caption">
                                                      @CNNnews18
                                                  </Typography>
                                              </Grid>
                                              <Grid item style={{cursor: "pointer",display:"flex",alignItems:"center",paddingLeft:22}}>
                                                  <i class="fa fa-close" aria-hidden="false" style={{fontSize:"10px",marginLeft:20,fontWeight:200,color:"grey"}}></i>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                      
                                      <Grid item style={{paddingTop:0,paddingLeft:0}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
                                      </Grid>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                
                <Grid item>
					
					<Typography type="caption">
						<Tooltip id="tooltip-dp" title="Find people you know" placement="top">
						<i class="fa fa-users" aria-hidden="true"></i>
						</Tooltip>
						&nbsp;
                        <label className="advertiseLink">Find people you know</label>
                    </Typography>
                </Grid>
                
            </Grid>
        )
    }
}

export default withStyles(styles)(TwitterSuggestions)
