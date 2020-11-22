// function 

function sayState(){

    fetch('https://api.covidindiatracker.com/state_data.json')
    .then(data => data.json())
    .then(finaldata => {
    
    let tableinsert =document.getElementById('tbodystate')
    
    
        for(key in finaldata)
        {
 
            if(finaldata[key].state=="Uttar Pradesh")
            {
                for(lock in finaldata[key].districtData)
                {


                    tableinsert.innerHTML +=`  <tr>
                    <th scope="row">${finaldata[key].districtData[lock].name}</th>
                    <td>${finaldata[key].districtData[lock].confirmed}</td>
                    <td>${finaldata[key].districtData[lock].active}</td>
                    <td>${finaldata[key].districtData[lock].deaths}</td>
                    <td>${finaldata[key].districtData[lock].recovered}</td>
                    </tr>`
                    // if(finaldata[key].districtData[lock].name=="")
                    // console.log(finaldata[key].districtData[lock].name);
                } 
            }
            // for(lock in finaldata[key].districtData)
            // {
            //     if(finaldata[key].districtData[lock].name=="")
            //     console.log(finaldata[key].districtData[lock].name);
            // }
        // console.log(finaldata[key].districtData);
   
           
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