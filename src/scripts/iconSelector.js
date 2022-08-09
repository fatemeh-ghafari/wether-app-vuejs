function selectIcon(weather, time) {
  let weatherIcon;

  switch (weather) {
    case "Thunderstorm":
      weatherIcon = "storm.png";
      break;

    case "Drizzle":
      weatherIcon = "rain.png";
      break;
    
    case "Rain":
      weatherIcon = "rain.png";
      break;
      
    case "Clouds":
      weatherIcon = "cloudy.png";
      break;
    
    case "Snow":
      weatherIcon = "snow.png";
      break;
    
    case "Clear":
      if (time === "night") {
        weatherIcon = "night.png"
        break;
      }
      weatherIcon = "sun.png";
      break;

    default:
      weatherIcon = "fog.png"
      break;
  }

  const iconSrc = `icons/${weatherIcon}`
  return iconSrc;
}

export default selectIcon;