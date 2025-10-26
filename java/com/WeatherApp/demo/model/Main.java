package com.WeatherApp.demo.model;

import lombok.Data;

@Data
public class Main {
    private double temp;
    private double feels_like;
    private double temp_min;
    private double temp_max;
    private int pressure;
    private int humidity;
    private int sea_level; // For some responses
    private int grnd_level; // For some responses
}