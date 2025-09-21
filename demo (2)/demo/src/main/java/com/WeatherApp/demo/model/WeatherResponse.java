package com.WeatherApp.demo.model;

import lombok.Data;
import java.util.List;

@Data
public class WeatherResponse {
    private Coord coord;
    private List<Weather> weather;
    private String base;
    private Main main;
    private Wind wind;
    private Clouds clouds;
    private long dt;
    private Sys sys;
    private long timezone;
    private long id;
    private String name;
    private int cod;
}
