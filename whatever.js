"use strict"

getData();

async function getData() {
    let response = await fetch("./mountains.json");
    let mountains = await response.json();

    // this is all the data, thats all it is
    mountains;

    const dropdown = document.getElementById("dropdown");

    // for parks, if the radio button is "location", populate dropdown with location data
    // if the radio button is "type", populate accordingly  

    for (let i = 0; i < mountains.mountains.length; i++) {
        console.log(mountains.mountains[i].name);
        
        // output an <option> each time through
        let new_name = mountains.mountains[i].name
        dropdown.innerHTML += "<option>" + new_name + "</option>";
    }
}

