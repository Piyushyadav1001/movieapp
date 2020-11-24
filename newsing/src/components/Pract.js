import React from "react";
function Pract(){
 const prsons=[
    {   id: 1,
        name: 'piy',
        age: 20
    },
    {
        id: 2,
        name: 'div',
        age: 18

    },
    {
        id: 3,
        name: 'der',
        age: 17
    }
]
const prsonlist=prsons.map((perrson,key)=><h2 key={perrson.id}> {key} I am {perrson.name} and age is{perrson.age}</h2>)
return <div>{prsonlist}</div>
}
export default Pract;