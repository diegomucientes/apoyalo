import React, { Component } from 'react';
import './PersonCard.css'; 


class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            ageperson: this.props.age 
        };
            
    }
    upFunction = () => this.setState({
        ageperson: this.state.ageperson +1
    })
        
    downFunction = () => this.setState({
        ageperson: this.state.ageperson -1 
    })
        
    
    render(){
        const { firstName, lastName,age, hairColor} = this.props;
        
    

        return(
            <div>
                <h1>
                    {firstName},{lastName}
                </h1>
                <p>
                    age: {this.state.ageperson}
                </p>
                 <p>
                    hair color: {hairColor}
                 </p>
                 
                 <button onClick = {this.upFunction}>
                     Click age Up
                 </button>
                 <button onClick = {this.downFunction}>
                     Click age Down
                 </button>
            </div>
        )
    }

}
export default PersonCard;