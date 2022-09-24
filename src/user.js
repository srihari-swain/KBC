import React,{Component}  from "react";
export default class User extends Component{
    render(){
        return(
            <>
            <h1>welcom  to {this.props.name}</h1>
            <button onClick={this.props.clickData}>Logout</button>
            
            </>
        )
    }

    
}
