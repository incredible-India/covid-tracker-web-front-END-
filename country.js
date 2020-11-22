
function totalCase(){
    fetch('https://api.covid19api.com/stats')
    .then(result1 => result1.json())
    .then(finalData1 =>{

        document.getElementById('globaldata').innerHTML=`Total Cases in the World : ${finalData1.Total}`
})
}



async function get_country_wise_data(){

  let covidData=await fetch('https://api.covid19api.com/summary')

  let covidDataShow= await covidData.json()

//   console.log(covidDataShow.Global.TotalConfirmed);
let tableinsert=document.getElementById('tbodycountry')
// console.log(tableinsert);
for(key in covidDataShow.Countries)
{
tableinsert.innerHTML +=`  <tr>
<th scope="row">${covidDataShow.Countries[key].Country}</th>
<td>${covidDataShow.Countries[key].TotalConfirmed}</td>
<td>${covidDataShow.Countries[key].NewConfirmed}</td>
<td>${covidDataShow.Countries[key].TotalDeaths}</td>
<td>${covidDataShow.Countries[key].TotalRecovered}</td>
</tr>`
}
// document.getElementById('globaldata').innerHTML=`Total Cases : ${covidDataShow.Global.TotalConfirmed} Globally`


}


if(navigator.onLine)
{
    get_country_wise_data() 
    totalCase();
}
else{
    document.getElementById('doalert').innerText=`Plese Check Your Internet Connection... `
    document.getElementById('doalert').style.display="block"
setTimeout(() => {
document.getElementById('doalert').style.display='none';
// document.getElementById('doalert').style.transition='0.5s';
}, 4000);

    document.getElementById('globaldata').innerHTML=`Plese Check Your Internet Connection...<br> `

    // document.getElementById('globaldata').innerHTML=`Global Status of Covid-19 `
}

