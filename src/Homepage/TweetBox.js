import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import mydp from '../assets/images/profilepic/mydp.png';

const styles ={
    tweetBar:{
        minHeight:"40px",
        display: "block",
        outline: 0,
        width: "100%",
        height: "65%",
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "5px",
        fontSize: "15px",
        fontFamily:"inherit",
        paddingTop: "8px",
        paddingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    },
};


class TweetBox extends Component{

    constructor(props){
        super(props);
        this.state={
            resize:"none",
            minHeight:"0px",
            tweetOptions:"none"
        };
        this.expandArea = this.expandArea.bind(this);
        this.shrinkArea = this.shrinkArea.bind(this);
    };
    shrinkArea(){
        this.setState({resize:"none",tweetOptions:"none",minHeight:"0px"})
    }
    expandArea(){
        this.setState({resize:"vertical",tweetOptions:"block",minHeight:"6em"})
    };
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column">
                <Grid item>
                    <Grid container style={{backgroundColor:"#E8F5FD"}}>
                        <Grid item xs={1}>
                            <Avatar src={mydp} size={50}/>
                        </Grid>
                        <Grid item xs={11} style={{display:"flex",alignItems:"center"}}>
                            <textarea className={classes.tweetBar} placeholder="What's happening?" spellCheck="false" autoComplete="false"  style={{resize:this.state.resize,minHeight:this.state.minHeight}}
                                      onFocus={this.expandArea} onBlur={this.shrinkArea}/>
                        </Grid>
                        <Grid item xs={1} style={{display:this.state.tweetOptions}}>
                        </Grid>
                        <Grid item xs={11} style={{display:this.state.tweetOptions,alignItems:"center"}}>
                            <Grid container>
                                <Grid item xs={0}>
                                </Grid>
                                    <Grid item xs={1}>
                                        <Tooltip title="Add photos or video" placement="top">
                                            <i className="fa fa-picture-o" aria-hidden="true" style={{cursor:"pointer",color:"#1da1f2"}}></i>
                                        </Tooltip>
                                    </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Add a GIF" placement="top">
										<i className="fa fa-object-group" aria-hidden="true" style={{cursor:"pointer",color:"#1da1f2"}}></i>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Add poll" placement="top">
                                        <i className="fa fa-bar-chart" aria-hidden="true" style={{cursor:"pointer",color:"#1da1f2"}}></i>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Location disabled" placement="top">
                                        <i className="fa fa-map-marker" aria-hidden="true" style={{cursor:"pointer",color:"#1da1f2"}}></i>
                                    </Tooltip>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{display:"flex",justifyContent:"center"}} className="refContainer">
                    <Typography className="refreshTweets">
                        See 1 new Tweet
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(TweetBox)
