import React, { Component } from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TwitterAppBar from './Searchpage/TwitterAppBar';
import LeftSidePanel from './Searchpage/LeftSidePanel';
import CenterPanel from './Searchpage/CenterPanel';
import './App.css';

const styles={
    dummyHeight:{
        height:"10em"
    }
};

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }
    componentDidMount(){
        this.setState({query:this.props.location.state.string});
     console.log(this.props.location.state.string);
    }
    render() {
        const classes = this.props.classes;
        return (
        <div style={{width:"95em"}}>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12}>
                    <TwitterAppBar searchQuery={this.state.query}/>
                </Grid>
                <Grid item xs={9} style={{marginTop:"165px"}}>
                    <Grid container spacing={24}>
                        <Grid item xs={3} className={classes.dummyHeight}>
                            <LeftSidePanel/>
                        </Grid>
                        <Grid item xs={6} className={classes.dummyHeight} >
                            <CenterPanel searchQuery={this.state.query}/>
                        </Grid>
                        <Grid item xs={3} className={classes.dummyHeight}>
							
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Search);
