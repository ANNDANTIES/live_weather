output=async()=>{
    console.log("button clicked")
    const coordinates = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={a6ecfdf42b26c97453fa1461c9cf440f}");
}
