<script>
        async function getWeather() {
            const apiKey = "70d74d829a72e5121e27761332893e1f"

            ;
            const city = document.getElementById("city").value;
            if (!city) return alert("Please enter a city name");
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.cod !== 200) {
                    alert("City not found");
                    return;
                }
                
                document.getElementById("city-name").innerText = data.name;
                document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
                document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
                document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                document.getElementById("weather-info").style.display = "block";
            } catch (error) {
                alert("Error fetching weather data");
            }
        }
    </script>
