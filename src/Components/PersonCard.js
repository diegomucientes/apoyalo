import React, { useState } from 'react';
import './PersonCard.css'; 




const PersonCard = props => {    
    const [state, setState] = useState({
        ageperson: props.age
    });
    
    
    const upFunction = () => setState({
        ageperson: state.ageperson +1
    })
        
    const downFunction = () => setState({
        ageperson: state.ageperson -1 
    })
    return(        
        <div>            
            <h1>{props.lastName}, {props.firstName}</h1>            
            <p>Edad: {state.ageperson}</p>   
            <button onClick= {upFunction}>Subele</button>   
            <button onClick={downFunction}>Bajale</button>  
            <p>Hair Color: {props.hairColor}</p>        
        </div>    
        
    );
}



export default PersonCard;
    

// class PersonCard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             ageperson: this.props.age 
//         };
            
//     }
    
//     render(){
//         const { firstName, lastName,age, hairColor} = this.props;
        
    

//         return(
//             <div>
//                 <h1>
//                     {firstName},{lastName}
//                 </h1>
//                 <p>
//                     age: {this.state.ageperson}
//                 </p>
//                  <p>
//                     hair color: {hairColor}
//                  </p>
                 
//                  <button onClick = {this.upFunction}>
//                      Click age Up
//                  </button>
//                  <button onClick = {this.downFunction}>
//                      Click age Down
//                  </button>
//             </div>
//         )
//     }

// }
// export default PersonCard;