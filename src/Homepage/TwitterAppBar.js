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
        minHeight: "33px",
        minWidth:"73px",
        border: "1px solid",
        borderRadius: 50,
        textTransform:"none",
        fontSize:"14px",
        marginTop:4,
        fontWeight:600,    
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
                <AppBar position="static" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={1} style={{marginLeft:"60px"}}>
                        </Grid>
                        <Grid item>
                            <Tabs value={this.state.value} style={{color:primary}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}>
                                <Tab label="Home" style={{minWidth:0,textDecoration:"none",fontFamily:'Segoe UI'}} href="/"/>
                                <Tab label="Moments" style={{minWidth:0,textDecoration:"none",fontFamily:'Segoe UI'}}/>
                                <Tab label="Notifications" style={{minWidth:0,textDecoration:"none",fontFamily:'Segoe UI'}}/>
                                <Tab label="Messages" style={{minWidth:0,textDecoration:"none",fontFamily:'Segoe UI'}}/>
                            </Tabs>
                        </Grid>
                        <Grid item xs={1} style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px"}}>
                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px",cursor: "pointer"}}>
                            </i>
                        </Grid>
                        <Grid item xs={2} className="searchMe" style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"150px"}}>
                            <input type="text" value={this.props.searchString} className="navSearch" placeholder="Search Twitter" spellCheck="false" autoComplete="false" onKeyPress={this.searchIt} onChange={evt=>this.updateInputVal(evt)}
                            />
                            <span className="fa fa-search" aria-hidden="true" style={{paddingRight:"20px"}}>
                            </span>
                         
                        </Grid>
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Avatar src={mydp} size={25} style={{width: 32,height: 32,marginTop:4,cursor: "pointer"}}/>
                        </Grid>
                        
                        <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Button  color="primary" className={classes.tweetButton} style={{marginLeft:"10px"}}>
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
