import React from "react";

import './index.css';

function Average(props){
    let items = [];
    let total = 0;
    if(!(localStorage.getItem('listOfTimes') === null)){
        items = JSON.parse(localStorage.getItem('listOfTimes'))
        for(let i = 0; i < items.length; i++){
            total += items[i];
        }
    }
    let average = total/items.length;
    
    let seconds, minutes
    if(average > 0){
        seconds = ("0" + (Math.floor(average / 1000) % 60)).slice(-2);
        minutes = ("0" + (Math.floor(average / 60000) % 60)).slice(-2);
    }
    else{
        seconds = '00'
        minutes = seconds

    }
    return(
        <div className="average-display">
            Average Time per Voter
            <br></br>
            {minutes} : {seconds} 
        </div>
    );
}
export default Average;