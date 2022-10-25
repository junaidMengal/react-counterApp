// import React,{Component} from 'react';
// import './Style.css'

// class Counter extends Component{
//     constructor(){
//         super();
//         this.state = {
//             counter:0
//         }
//     }
//     Increament(){
//         this.setState({
//             counter:this.state.counter+1
//         })
//     }
//     Reset(){
//         this.setState({
//             counter:0
//         })
//     }
//     Decreament(){
//         if(this.state.counter > 0){
//             this.setState({
//                 counter:this.state.counter-1
//             })
//         }
//     }
//     render(){
//         return(
            
//             <div className='counter'>
//                 <h1>React Counter App</h1>
//                 <h2>{this.state.counter}</h2>
//                 <button className='inc' onClick={()=>this.Increament()}>Increament</button>
//                 <button className='res' onClick={()=>this.Reset()}>Reset</button>
//                 <button className='dec' onClick={()=>this.Decreament()}>Decreament</button>
//             </div>
            
//         )
//     }
// }

// export default Counter;

import React,{Component} from 'react';


class Counter extends Component{
constructor(){
    super();
    this.state ={
        counter:0
    }
}
    render(){
        return(
            <div>
                <h1>React Counter App</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={()=>this.Increament}>Increament</button>
                <button onClick={()=>this.Reset}>Reset</button>
                <button onClick={()=>this.Decreament}>Decreament</button>
            </div>
        )
    }
}
export default Counter;


