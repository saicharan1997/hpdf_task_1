import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import 'font-awesome/css/font-awesome.min.css';

const styles ={};

class UserSearchBox extends Component{
    render(){
        return(
            <div>
            <Grid container>
                <Grid item xs={12} style={{backgroundColor:"#ffffff",height:"4em",display:"flex",alignItems:"center",paddingTop:0,paddingLeft:15}}>
                    <Typography type="title">
                        <b>Search filters </b>&nbsp;<label className="textColorBlue" style={{fontSize:"12px"}}>Show</label> 
                    </Typography>
                    
                    
                </Grid>
            </Grid>
                <Grid container  style={{marginTop:"1em"}}>
                    <Grid item direction="column" xs={12} style={{backgroundColor:"#ffffff",display:"flex",paddingTop:10,paddingLeft:15}}>
                        <Grid item>
                          <Typography type="title">
                            <b>Related searches</b>
                          </Typography>
                         </Grid>
                         
                         <Grid item>
                          <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600,paddingTop:0}} className="hoverLink">
                                gujarat elections
                            </Typography>
                         </Grid>
                         
                         <Grid item>
                          <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600,paddingTop:0}} className="hoverLink">
                                the centre
                            </Typography>
                         </Grid>
                         
                         <Grid item>
                          <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600,paddingTop:0}} className="hoverLink">
                                gujarat bjp
                            </Typography>
                         </Grid>
                         
                         <Grid item>
                          <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600,paddingTop:0}} className="hoverLink">
                                cvoter
                            </Typography>
                         </Grid>
                         
                         <Grid item>
                          <Typography type="body2" style={{color:"rgb(29, 161, 242)",fontWeight:600,paddingTop:0}} className="hoverLink">
                                delhi
                            </Typography>
                         </Grid>
                         
                    </Grid>
                         
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(UserSearchBox)
