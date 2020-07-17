import React from "react";

function Average(props){
    const items = props.items;
    let total = 0;
    for(let i = 0; i < items.length; i++){
        total += items[i];
    }
    let average = total/items.length;
    
    let seconds, minutes, hours
    if(average > 0){
        seconds = ("0" + (Math.floor(average / 1000) % 60)).slice(-2);
        minutes = ("0" + (Math.floor(average / 60000) % 60)).slice(-2);
    }
    else{
        seconds = '00'
        minutes = seconds

    }
    return(
        <div>
        {minutes} : {seconds} 
        </div>
    );
}
export default Average;