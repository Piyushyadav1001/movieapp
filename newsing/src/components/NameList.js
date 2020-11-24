import React from "react";
import Person from "./Person"
function NameList(){
 const persons=[
    {   id:1,
        name:'piy',
        age:20
    },
    {
        id:2,
        name:'div',
        age:18

    },
    {
        id:3,
        name:'der',
        age:17
    }
]
const personlist=persons.map(person=>)
return <div>{personlist}</div>
}
export default NameList;