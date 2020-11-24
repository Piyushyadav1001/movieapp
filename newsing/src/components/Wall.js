import React, { Component } from 'react';
import Ceiling from "./Ceiling"
class Wall extends Component {
    constructor(props) {
        console.log("constructor called");
        super(props)
        this.state={
            display:true
        }
    }
    componentDidMount(){
        console.log("cdm called");
    }
    componentDidUpdate(){
        console.log('cdu called');
    }
    render() {
        console.log("rendor called")
        const {count}=this.state
        return this.state.display && (
            <div>
<button onClick={()=>this.setState({display:false})}>click</button>
{this.state.display && <Ceiling/>}
            </div>
        );
    }
}
export default Wall;