// function for xml Request

function global_information(){
 
//some extera work for adding data table 

let tableinsert =document.getElementById('tableEntry')

    //  creating new constructor for XMLHttpRequest object


 let xhr=new XMLHttpRequest();

//while proceesing...
xhr.onloadstart=function(){
    console.log('onprogress');
    document.getElementById('infos').style.display='block';
    setTimeout(() => {
        document.getElementById('infos').style.display='none';
    }, 4000);
    tableinsert.innerHTML=`<h4>It seems your internet connection is slow... </h3><div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>`
}

// when all data will be loaded 

 xhr.onload= function(){

     if(this.readyState==4 && this.status==200)
     {
        document.getElementById('infos').style.display='none';
         let coviddata=JSON.parse(xhr.responseText)//covert all  text data to json object
          

        //  adding table
        
         tableinsert.innerHTML = `<tr>
         <th scope="row">All World</th>
         <td>${coviddata.Total}</td>
         <td>${coviddata.AllUpdated}</td>
         <td>${coviddata.ByCountry}</td>
       </tr>`
     }


 }

 xhr.onabort= function(){
     alert("Server Error...")
 }



//  fetching API and sending to server

 xhr.open("GET",'https://api.covid19api.com/stats',true)
 xhr.send();

}


if(navigator.onLine)
{
    global_information();
}else{
    document.getElementById('tableEntry').innerHTML=`Please Check Your Internet Connection.. <br>`
    document.getElementById('doalert').innerHTML=` Error :  Check Your internet Connection`
    document.getElementById('doalert').style.display='block'

    setTimeout(() => {
        document.getElementById('doalert').style.display="none";
    }, 4000);
}
