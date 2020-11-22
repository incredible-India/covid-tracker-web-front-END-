// function 

function sayState(){

fetch('https://api.covidindiatracker.com/state_data.json')
.then(data => data.json())
.then(finaldata => {

let tableinsert =document.getElementById('tbodystate')


    for(key in finaldata)
    {

        tableinsert.innerHTML +=`  <tr>
<th scope="row">${finaldata[key].state}</th>
<td>${finaldata[key].confirmed}</td>
<td>${finaldata[key].active}</td>
<td>${finaldata[key].deaths}</td>
<td>${finaldata[key].recovered}</td>
</tr>`
        // console.log(finaldata[key].state);
    }





}).catch(error => {
   
    document.getElementById('doalert').innerText=`Plese Check Your Internet Connection... ${error}`
    document.getElementById('doalert').style.display="block"
setTimeout(() => {
document.getElementById('doalert').style.display='none';
// document.getElementById('doalert').style.transition='0.5s';
}, 4000);

tableinsert.innerHTML=`Plese Check Your Internet Connection...<br> ${error}`

    document.getElementById('globaldata').innerHTML=`Global Status of Covid-19 `
})




}


sayState()