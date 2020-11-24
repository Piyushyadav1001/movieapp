import React, { Component } from 'react';
class Floor extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    incount=()=>{
        this.setState(prevalue=>{return{count:prevalue.count+0}})
    }
    componentDidMount(){
        console.log("cdm called for floor");
    }
    componentDidUpdate(){
        console.log('cdu called for floor');
    }
    render() {
        console.log('rendor floor claeed')
        const {count}=this.state;
        return (
        <div>
            <button onClick={this.incount}>click{count}</button>
            </div>
            );
    }
}
export default Floor;