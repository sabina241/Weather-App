package com.WeatherApp.demo.controller;

import com.WeatherApp.demo.model.WeatherResponse;
import com.WeatherApp.demo.service.WeatherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; // Important for frontend

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:8080") // Adjust this to your frontend URL
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public ResponseEntity<WeatherResponse> getWeather(@RequestParam String city) {
        WeatherResponse weather = weatherService.getCurrentWeather(city);
        if (weather != null) {
            return ResponseEntity.ok(weather);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}