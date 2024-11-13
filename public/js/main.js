
const searchName = document.getElementById('searchName');
const submitbtn = document.getElementById('submitbtn');
const output_section = document.getElementById('city_name');
//const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getinfo=  async (event)=> {
    event.preventDefault();
    const search_Name = searchName.value.trim();
    if (search_Name === "") {
        output_section.innerText = "Please Enter a City Name";
        datahide.classList.add('data_hide');
    }
    else {
        try{
          
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${search_Name}&units=metric&APPID=enter your api key`;
          const data = await fetch(url);
          const data1 =  await data.json();
          const arr = [data1];
          output_section.innerText = `${arr[0].name},${arr[0].sys.country}`;
          temp_real_val.innerText = arr[0].main.temp;
          //temp_status.innerText = arr[0].weather[0].main;
          const weatherMood = arr[0].weather[0].main;
          //condition to check cloudy or sunny etc.
          if(weatherMood==='Clear'){
            temp_status.innerHTML = '<i class="fa fa-sun" style ="color: #eccc68;" aria-hidden="true"></i>';
          }
          else if(weatherMood==='Clouds'){
            temp_status.innerHTML = '<i class="fa fa-cloud" style="color:#f1f2f6;" aria-hidden="true"></i>';
          }
          else if(weatherMood==='Rain'){
            temp_status.innerHTML = '<i class="fas fa-cloud-rain style="color:#a4b0be;" aria-hidden="true"></i>';
          }
          else{
            temp_status.innerHTML = '<i class="fa fa-sun" style="color: #eccc68;" aria-hidden="true"></i>';
          }
          
        }
        catch(err){
            output_section.innerText = "Eneter Name Correctly";
            datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click', getinfo);
