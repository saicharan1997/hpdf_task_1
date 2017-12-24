import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import 'font-awesome/css/font-awesome.min.css';
import Card, { CardActions, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import img1 from '../assets/images/s1.png';
import pp1 from '../assets/images/profilepic/s1.png';
import img2 from '../assets/images/s1.png';
import pp2 from '../assets/images/profilepic/s1.png';
import img3 from '../assets/images/s1.png';
import pp3 from '../assets/images/profilepic/s1.png';
import img4 from '../assets/images/s1.png';
import pp4 from '../assets/images/profilepic/s1.png';

const styles ={};

class TwitterFeeds extends Component{
    render(){
        return(
            <Grid container direction="column" style={{backgroundColor:"#ffffff"}}>
                <Grid item style={{borderBottom:"1px solid #efe6e6"}}>
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src={pp1} size={50}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <b><label type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </label></b>
                                            
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <label type="caption" fontSize="14px" color="#657786">
                                                @channel&nbsp;
                                                <label className="feedAuthor">
                                                3h
                                            </label>
                                            </label>    
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                       Content ... 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={img1} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b>&nbsp;&nbsp;57</b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionGreen">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;466</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionRed">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;948</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;2</label></b>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    

                    
                    
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src={pp2} size={50}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <b><label type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </label></b>
                                            
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <label type="caption" fontSize="14px" color="#657786">
                                                @channel&nbsp;
                                                <label className="feedAuthor">
                                                8h
                                            </label>
                                            </label>    
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                        Content ...
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={img2} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b>&nbsp;&nbsp;65</b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionGreen">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;270</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionRed">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;1.1K</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;1</label></b>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    
                    
                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src={pp3} size={50}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <b><label type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </label></b>
                                            
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <label type="caption" fontSize="14px" color="#657786">
                                                @channel&nbsp;
                                                <label className="feedAuthor">
                                                12h
                                            </label>
                                            </label>    
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
										Content ...                               
									</Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={img3} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b>&nbsp;&nbsp;64</b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionGreen">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;449</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionRed">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;2.7K</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;2</label></b>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    
                    
    

                    <Grid container className="feedGrid">
                        <Grid item>
                            <Avatar src={pp4} size={50}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column">
                                <Grid item style={{paddingBottom:0}}>
                                    <Grid container>
                                        <Grid item>
                                            <b><label type="body2" className="feedAuthor">
                                                {this.props.query}
                                            </label></b>
                                            
                                        </Grid>
                                        <Grid item style={{display:"flex",alignItems:"center",paddingLeft:0}}>
                                            <label type="caption" fontSize="14px" color="#657786">
                                                @channel&nbsp;
                                                <label className="feedAuthor">
                                                23h
                                            </label>
                                            </label>    
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{paddingTop:0}}>
                                    <Typography type="body1">
                                        Content ...
									</Typography>
                                </Grid>
                                <Grid item>
                                    <Card style={{boxShadow:"none",width:"490px"}}>
                                        <CardMedia image={img4} style={{height:"400px"}}/>
                                        <CardActions>
                                            <Grid container>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Reply" placement="top">
                                                        <i className="fa fa-comment-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b>&nbsp;&nbsp;64</b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionGreen">
                                                    <Tooltip title="Retweet" placement="top">
                                                        <i className="fa fa-retweet cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;449</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionRed">
                                                    <Tooltip title="Like" placement="top">
                                                        <i className="fa fa-heart-o cardAction" aria-hidden="true">
                                                        </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;2.7K</label></b>
                                                </Grid>
                                                <Grid item xs={2} className="cardActionBlue">
                                                    <Tooltip title="Direct Message" placement="top">
                                                        <i className="fa fa-envelope-o cardAction" aria-hidden="true">
                                                    </i>
                                                    </Tooltip>
                                                    <b><label>&nbsp;&nbsp;2</label></b>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <i className="fa fa-chevron-down" aria-hidden="true">
                            </i>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TwitterFeeds)
