// for dark theme coding
class id{
    constructor(Name) {
        this.id=document.getElementById(this.name=Name)
        
    }
}
// dark theme coding...

let darkTheme =new id('dark')
darkTheme.id.addEventListener('click',function(){
    document.body.classList.toggle("dark")
    // document.getElementById('table').classList.toggle("dark")
  
    
    if(darkTheme.id.innerText=="Dark Theme")
    {
        darkTheme.id.innerText="Light Theme"
        document.getElementById("tabledata").style.color="white"
        document.getElementById("tabledata").style.backgroundColor="black"
        document.getElementById("cardbhai").style.color="white"
        document.getElementById("cardbhai").style.backgroundColor="black"
        document.getElementById("cardbhai1").style.color="white"
        document.getElementById("cardbhai1").style.backgroundColor="black"
        document.getElementById("cardbhai2").style.color="white"
        document.getElementById("cardbhai2").style.backgroundColor="black"

    }else{
        darkTheme.id.innerText="Dark Theme"
        document.getElementById("tabledata").style.color="black"
        document.getElementById("tabledata").style.backgroundColor="white"
        document.getElementById("cardbhai").style.color="black"
        document.getElementById("cardbhai").style.backgroundColor="white"
        document.getElementById("cardbhai1").style.color="black"
        document.getElementById("cardbhai1").style.backgroundColor="white"
        document.getElementById("cardbhai2").style.color="black"
        document.getElementById("cardbhai2").style.backgroundColor="white"
    }

})

// *********************************

{/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>@mdo</td>
</tr> */}

// ajax coding for the country wise detail i n first table are shown lets code

function totalCase(){
    fetch('https://api.covid19api.com/stats')
    .then(result1 => result1.json())
    .then(finalData1 =>{

        document.getElementById('globaldata').innerHTML=`Total Cases in the World : ${finalData1.Total}`
})
}

//coding starts form here


function Covid_data_FirstEntry(){
  
let makeTable=document.getElementById('tbody')
// console.log(makeTable);


    fetch('https://api.covid19api.com/summary')
    .then(result => result.json())
    .then(finalData =>{

        // document.getElementById('globaldata').innerHTML=`Total Cases in the World : ${finalData.Global.TotalConfirmed}`

for(i in finalData.Countries)
{
if(finalData.Countries[i].Country=='India')
{
makeTable.innerHTML +=`<th scope="row">${finalData.Countries[i].Country}</th>
<td>${finalData.Countries[i].TotalConfirmed}</td>
<td>${finalData.Countries[i].NewConfirmed}</td>
<td>${finalData.Countries[i].TotalDeaths}</td>
<td>${finalData.Countries[i].TotalRecovered}</td>
</tr>`
}
if(finalData.Countries[i].Country=='United Arab Emirates')
{
makeTable.innerHTML +=`<th scope="row">${finalData.Countries[i].Country}</th>
<td>${finalData.Countries[i].TotalConfirmed}</td>
<td>${finalData.Countries[i].NewConfirmed}</td>
<td>${finalData.Countries[i].TotalDeaths}</td>
<td>${finalData.Countries[i].TotalRecovered}</td>
</tr>`
}

if(finalData.Countries[i].Country=="United States of America")
{
makeTable.innerHTML +=`<th scope="row">${finalData.Countries[i].Country}</th>
<td>${finalData.Countries[i].TotalConfirmed}</td>
<td>${finalData.Countries[i].NewConfirmed}</td>
<td>${finalData.Countries[i].TotalDeaths}</td>
<td>${finalData.Countries[i].TotalRecovered}</td>
</tr>`
}
if(finalData.Countries[i].Country=="Japan")
{
makeTable.innerHTML +=`<th scope="row">${finalData.Countries[i].Country}</th>
<td>${finalData.Countries[i].TotalConfirmed}</td>
<td>${finalData.Countries[i].NewConfirmed}</td>
<td>${finalData.Countries[i].TotalDeaths}</td>
<td>${finalData.Countries[i].TotalRecovered}</td>
</tr>`
}

    // console.log(finalData.Countries[i].Country);
}


    }).catch(error => {
   
        document.getElementById('doalert').innerText=`Plese Check Your Internet Connection... ${error}`
        document.getElementById('doalert').style.display="block"
setTimeout(() => {
    document.getElementById('doalert').style.display='none';
    // document.getElementById('doalert').style.transition='0.5s';
}, 4000);

        makeTable.innerHTML=`Plese Check Your Internet Connection...<br> ${error}`

        document.getElementById('globaldata').innerHTML=`Global Status of Covid-19 `
    })

  

}

Covid_data_FirstEntry();

document.getElementById('showcountry').addEventListener('click',()=>{
    location.href="country.html"
})

totalCase();