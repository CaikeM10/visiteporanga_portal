"use client";

import { useEffect, useState } from "react";

export interface ForecastDay {
  date: string;
  weathercode: number;
  tempMax: number;
  tempMin: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  updatedAt: string;

  temperature: number;
  feelsLike: number;

  humidity: number;

  windspeed: number;
  winddirection: number;

  weathercode: number;

  sunrise: string;
  sunset: string;

  forecast: ForecastDay[];
}

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadWeather() {
    try {
      const response = await fetch("/api/weather");

      if (!response.ok) {
        throw new Error("Erro ao carregar clima.");
      }

      const data: WeatherData = await response.json();

      setWeather(data);
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWeather();

    // Atualiza automaticamente a cada 10 minutos
    const interval = setInterval(loadWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  return {
    weather,
    loading,
    reload: loadWeather,
  };
}
