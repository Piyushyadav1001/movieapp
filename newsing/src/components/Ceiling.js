import React, { Component } from 'react';

class Ceiling extends Component {    
    componentWillUnmount(){
        console.log("unmount phase");
    }
    render() {
        return (
            <h2 style={{color:this.props.color}}>Ceiling</h2>
        );
    }
}
export default Ceiling;