import React,{Component} from"react"
import User from "./user"
import Guest from "./guest" 
export default class App extends Component{
    state={
        islogged:false
    }
    loggin=()=>{
        this.setState({islogged:false})
    }
    loggedout=()=>{
        this.setState({islogged:true})
    }
    render(){
        const logged=this.state.islogged;
        return(
        <div>
            {logged  ? <User name="srihari" clickData={this.loggin}/>:<Guest clickData={this.loggedout}/>}
        
    
    
            
            </div>
        )

        
    }
}
