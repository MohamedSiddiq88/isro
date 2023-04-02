//fetch data 
async function fetch_data(){

    let responce=await fetch("https://isro.vercel.app/api/customer_satellites");
    let result=await responce.json();
    console.log(result);
    
    }
    
    fetch_data();


//create container and row
let container = document.createElement("div");
let row = document.createElement("div");


//set class
container.className = "container";
row.className = "row";

let flag;

async function cards(){
try{

    //rest countries
    let response1 = await fetch("https://restcountries.com/v2/all");
    let result1 = await response1.json();
    

      //result value
      let response = await fetch("https://isro.vercel.app/api/customer_satellites");
      let result = await response.json();
      result=result.customer_satellites;
      
  
  
  
  row.innerHTML="";
  
  
  //append row
  container.append(row);
  
  //create col and card
  for (let i = 0; i < result.length; i++) {
  
      //create col and card
      let col = document.createElement("div");
  
      //add class
      col.classList.add( "col-md-4");
  
    //index of country
    
    result1.forEach((ele,ind) => {
        if((ele.name.toLowerCase()==result[i].country.toLowerCase())||(result[i].country.toLowerCase()=="usa"&&ele.name=="United States of America")||(result[i].country.toLowerCase()=="uk"&&ele.name=="United Kingdom of Great Britain and Northern Ireland")||(result[i].country.toLowerCase()=="republic of korea"&&ele.name=="Korea (Republic of)")||(result[i].country.toLowerCase()=="the netherlands"&&ele.name=="Netherlands")){
            
            flag=ele.flag;
            
        }
    });

    

      //add text
      col.innerHTML += `
      <div class="card" >
      <img src=${flag} class="card-img-top" alt="..." style="border:1px solid black;">
    <div class="card-body">
        <h5>Country: ${result[i].country}</h5>
      <h5 class="card-title">ID: ${result[i].id}</h5>
      <p class="card-text">Launcher: ${result[i].launcher}</p>
      <p class="card-text">Launch Date: ${result[i].launch_date}</p>
    </div>
  </div>
      `
  
      //append
      row.append(col);
  }
  
  
  
  
  
  //append 
  document.body.append(container);

}
 catch(error){
    console.log(error);
    alert(error);
 } 

}

cards();

console