import React , {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import 'font-awesome/css/font-awesome.min.css';
import Tabs, { Tab } from 'material-ui/Tabs';
import {Redirect} from 'react-router-dom';
import mydp from '../assets/images/profilepic/mydp.png';


const styles={
    tweetButton:{
        backgroundColor: "#1da1f2",
        color:"#ffffff",
        padding: 0,
        minHeight: "38px",
        border: "1px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px",        
    },
};
const primary = '#1DA1F2';

class TwitterAppBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: 0,
            searchString:'',
            redirect:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchIt = this.searchIt.bind(this);
    }
    searchIt = (event)=>{
        let code = event.keyCode || event.which;
        if(code===13){
            
            this.setState({redirect:true})
        }
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    updateInputVal(evt){
        this.setState({
            searchString:evt.target.value
        })
    }
    render(){
        if(this.state.redirect){
            return <Redirect push to={{
                pathname:"/search",
                state:{string:this.state.searchString}
            }}/>;
        }
        const classes = this.props.classes;
        return(
            <div>
                <AppBar position="fixed" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={0}>
                        </Grid>
                        <Grid item>
                            <Tabs value={this.state.value} style={{color:primary}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}>
                                <Tab label="Home" style={{minWidth:0,textDecoration:"none",color:"#000000"}} href="/"/>
                                <Tab label="Moments" style={{minWidth:0,color:"#000000"}}/>
                                <Tab label="Notifications" style={{minWidth:0,color:"#000000"}}/>
                                <Tab label="Messages" style={{minWidth:0,color:"#000000"}}/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={4} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px"}}>
                            </i>
                        </Grid>
                        <Grid item xs={2} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <input type="text" value={this.state.searchString} className="navSearch" placeholder="Search Twitter" spellCheck="false" autoComplete="false" contentEditable="false" onKeyPress={this.searchIt} onChange={evt=>this.updateInputVal(evt)}
                            />
                            <span className="fa fa-search" aria-hidden="true">
                            </span>
                        </Grid>
                        <Grid item  xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Avatar src={mydp} size={50}/>
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button  color="primary" className={classes.tweetButton}>
                                Tweet
                            </Button>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(TwitterAppBar)
