import React from 'react';
function Person({person}){
return (
        <div>
            <h2> I am {person.name} ,my age is{person.age}</h2>
            </div>
    );
}
export default Person;
