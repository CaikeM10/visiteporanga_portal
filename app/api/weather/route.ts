import { NextResponse } from "next/server";

export async function GET() {
  const latitude = -4.7447;
  const longitude = -40.9206;

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    "&current=" +
    [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "wind_speed_10m",
      "wind_direction_10m",
      "weather_code",
    ].join(",") +
    `&daily=` +
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
    ].join(",") +
    `&timezone=America/Sao_Paulo`;

  const response = await fetch(url, {
    next: {
      revalidate: 300, // Atualiza a cada 5 minutos
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        error: "Não foi possível obter os dados meteorológicos.",
      },
      {
        status: 500,
      },
    );
  }

  const data = await response.json();
  console.log(data);

  const forecast = data.daily.time.map((date: string, index: number) => ({
    date,
    weathercode: data.daily.weather_code[index],
    tempMax: Math.round(data.daily.temperature_2m_max[index]),
    tempMin: Math.round(data.daily.temperature_2m_min[index]),
    sunrise: data.daily.sunrise[index],
    sunset: data.daily.sunset[index],
  }));

  return NextResponse.json({
    updatedAt: new Date(data.current.time).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),

    temperature: Math.round(data.current.temperature_2m),

    feelsLike: Math.round(data.current.apparent_temperature),

    humidity: data.current.relative_humidity_2m,

    windspeed: Math.round(data.current.wind_speed_10m),

    winddirection: data.current.wind_direction_10m,

    weathercode: data.current.weather_code,

    sunrise: forecast[0].sunrise,

    sunset: forecast[0].sunset,

    forecast,
  });
}
