

# 🌤 Weather App

A real-time **Weather Application** built with **Spring Boot** and the **OpenWeather API**, featuring a responsive frontend with **HTML, CSS, and JavaScript**. The app includes **dynamic backgrounds** based on climate and a **°C ↔ °F toggle** for temperature display.

---

## ✨ Features

* 🌍 Search weather by **city name**
* 🌡 Toggle between **Celsius (°C)** and **Fahrenheit (°F)**
* 🎨 **Dynamic backgrounds** for sunny, cloudy, rainy, snowy, and foggy conditions
* 🚦 Clear **error handling** for invalid/missing cities
* 🔄 **Spring Boot REST API** integrated with OpenWeather
* 🌐 Deployed on **GitHub Pages (frontend)** and **Heroku (backend)**

---

## 🛠 Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Java, Spring Boot
* **API**: OpenWeather REST API
* **Deployment**:

  * Frontend → GitHub Pages / Netlify
  * Backend → render

---

## 🚀 How It Works

1. User enters a city name in the frontend.
2. The frontend sends a request → Backend (`/api/weather?city=CityName`).
3. Backend calls the **OpenWeather API** using `RestTemplate`.
4. JSON response is mapped into **model classes** (`WeatherResponse`, `Main`, `Wind`, etc.).
5. Backend returns processed JSON → Frontend displays the weather with a dynamic UI.

---

## 📸 Screenshots
<img width="1819" height="872" alt="{71AC3E74-4972-497A-9633-3FE609B2CC27}" src="https://github.com/user-attachments/assets/0c782ae5-8732-4b36-a079-e0582a04ee6f" />



## 🔮 Next Steps

* Add **5-day weather forecast**
* Support **geolocation (auto-detect location)**
* Deploy backend to **AWS / Azure** for scalability
* Add **dark/light theme toggle**

---

## 📂 Repository Structure

```
weather-app/
│── backend/ (Spring Boot project)
│   ├── src/main/java/com/weatherapp/...
│   ├── resources/application.properties
│   └── target/WeatherApp.jar
│
│── frontend/ (HTML, CSS, JS files)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```




