output=async()=>{
    const place = document.getElementById('city').value;
    console.log("button clicked",place,typeof(place))
    // https://api.openweathermap.org/geo/1.0/direct?q=London&appid=b3943ac2fca554fa76f0272f4b1bdb9f
    const coordinates = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=b3943ac2fca554fa76f0272f4b1bdb9f`);
    console.log(coordinates,typeof(coordinates));
    if(coordinates.status==200){
        const coord = await coordinates.json()
        console.log(coord,typeof(coord));
        const point = coord[0];
        const lat = point["lat"]
        const lon = point["lon"]
        console.log(point,lat,lon);
        //https://api.openweathermap.org/data/2.5/weather?lat=13.0836939&lon=80.270186&appid=b3943ac2fca554fa76f0272f4b1bdb9f
        //
        const w = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b3943ac2fca554fa76f0272f4b1bdb9f`)
        console.log("weather details",w)
        const result = await w.json()
        console.log(result,typeof(result))
        const details = result.weather[0];
        console.log(details,typeof(details));
        const wind = result.wind;
        console.log(wind,typeof(wind));
        const gen = result.main;
        document.getElementById("weather").innerHTML =
        `
            <img src="./img/w1-removebg-preview.png" style="display:block;margin-left:40%;margin-right:60%;width:200px;height:200px;">
            <div class="d-flex justify-content-between align-items-left mt-3">
                <div class="d-flex flex-column justify-content-between align-items-left ms-5">
                    <h3>Climate Update</h3>
                    <p>Main: ${details.main}</P>
                    <p>Detailed:${details.description}</p>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-left ms-5">
                    <h3>Wind Update</h3>
                    <p>Degree: ${wind.deg}</p>
                    <p>Speed:  ${wind.speed}</p>
                </div>
                    <div class="d-flex flex-column justify-content-between align-items-left ms-5">
                    <h3>General Update</h3>
                    <p>Degree: ${gen.humidity}</p>
                    <p>Speed:  ${gen.pressure}</p>
                </div>
            </div>`;
        }
        else{
            alert("Place not found");
        }
       
    //     if(w.status==200){
    //         const weather = await w.json();
    //         console.log(weather);
    //     }
    // else{
    //     alert("Place not found");
    // }
    // coordinates.forEach((element)=>cosole.log(`${element.lat},${element.lon}`));
}
