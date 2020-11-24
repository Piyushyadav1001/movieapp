import React, { Component } from 'react';
import Wall from './Wall';
import Floor from './Floor';
import Ceiling from './Ceiling';
class Kitchen extends Component {
    render() {
        return (
            <div>
                <h1>Kitchen</h1>
             <Wall/>
             <Ceiling/> 
             <Floor/>  
            </div>
        );
    }
}
export default Kitchen;