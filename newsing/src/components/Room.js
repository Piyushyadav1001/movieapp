import React, { Component } from 'react';
import Wall from './Wall';
import Floor from "./Floor";
import Ceiling from "./Ceiling";
class Room extends Component {
    render() {
        return (
            <div>
                <h1>Room</h1>
             <Wall/>
             <Ceiling color='red'/> 
             <Floor/>  
            </div>
        );
    }
}
export default Room;