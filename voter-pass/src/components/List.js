import React from "react";

function List (props){    
    const items = props.items;
    const listItems = items.map(item =>{
        let  seconds = ("0" + (Math.floor(item / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(item / 60000) % 60)).slice(-2);
        return <div >
                <td>{minutes} : {seconds}</td></div>
     });
    
return(
<div>{listItems}</div>
    );
}

export default List;