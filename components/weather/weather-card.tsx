"use client";

import { useState } from "react";
import { useWeather } from "@/hooks/use-weather";

import {
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  Sunrise,
  Sunset,
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudFog,
  ChevronDown,
} from "lucide-react";

function getWeatherDescription(code: number) {
  switch (code) {
    case 0:
      return "Céu limpo";

    case 1:
      return "Predominantemente limpo";

    case 2:
      return "Parcialmente nublado";

    case 3:
      return "Nublado";

    case 45:
    case 48:
      return "Neblina";

    case 51:
    case 53:
    case 55:
      return "Garoa";

    case 61:
    case 63:
    case 65:
      return "Chuva";

    case 80:
    case 81:
    case 82:
      return "Pancadas de chuva";

    case 95:
    case 96:
    case 99:
      return "Tempestade";

    default:
      return "Condição desconhecida";
  }
}

function WeatherIcon({ code }: { code: number }) {
  switch (code) {
    case 0:
      return <Sun className="size-12 text-yellow-400" />;

    case 1:
    case 2:
      return <Cloud className="size-12 text-sky-400" />;

    case 3:
      return <Cloud className="size-12 text-slate-500" />;

    case 45:
    case 48:
      return <CloudFog className="size-12 text-slate-400" />;

    case 51:
    case 53:
    case 55:
      return <CloudDrizzle className="size-12 text-sky-500" />;

    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return <CloudRain className="size-12 text-blue-500" />;

    case 95:
    case 96:
    case 99:
      return <CloudLightning className="size-12 text-amber-500" />;

    default:
      return <Cloud className="size-12 text-slate-500" />;
  }
}

export function WeatherCard() {
  const { weather, loading } = useWeather();

  const [showForecast, setShowForecast] = useState(false);

  if (loading) {
    return (
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border bg-card p-8 shadow">
            <p className="text-muted-foreground">
              Carregando informações do clima...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!weather) {
    return (
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border bg-card p-8 shadow">
            <p className="text-destructive">
              Não foi possível carregar os dados meteorológicos.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-3xl border bg-card shadow-xl">
          {/* =========================
    Header do Clima
========================= */}
          <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-green-700 px-8 py-10 text-white">
            {/* Efeito de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Informações da cidade */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/15 p-3 backdrop-blur">
                    <MapPin className="size-6" />
                  </div>

                  <div>
                    <span className="text-sm font-medium uppercase tracking-widest text-white/70">
                      Ceará • Brasil
                    </span>

                    <h2 className="mt-1 text-4xl font-bold">
                      Clima em Poranga
                    </h2>

                    <p className="mt-2 max-w-md text-white/80">
                      Acompanhe as condições climáticas em tempo real para
                      planejar melhor sua visita aos atrativos naturais e
                      culturais de Poranga.
                    </p>

                    <p className="mt-4 text-sm text-white/70">
                      Dados do clima atualizados às {weather.updatedAt}{" "}
                      <br></br>
                      Fonte: Open-Meteo
                    </p>
                  </div>
                </div>
              </div>

              {/* Temperatura principal */}
              <div className="flex items-center gap-6 rounded-3xl bg-white/10 p-6 backdrop-blur">
                <WeatherIcon code={weather.weathercode} />

                <div>
                  <h3 className="text-6xl font-bold leading-none">
                    {weather.temperature}°
                  </h3>

                  <p className="mt-3 text-lg text-white/90">
                    {getWeatherDescription(weather.weathercode)}
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Sensação térmica de {weather.feelsLike}°
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* =========================
    Informações do Clima
========================= */}
          <div className="grid gap-6 bg-background p-8 md:grid-cols-2 xl:grid-cols-5">
            {/* Sensação Térmica */}
            <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Thermometer className="size-7 text-primary" />
              </div>

              <p className="text-sm text-muted-foreground">Sensação térmica</p>

              <h3 className="mt-2 text-3xl font-bold">{weather.feelsLike}°</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Temperatura percebida pelo corpo neste momento.
              </p>
            </div>

            {/* Umidade */}
            <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900/30">
                <Droplets className="size-7 text-sky-500" />
              </div>

              <p className="text-sm text-muted-foreground">Umidade do ar</p>

              <h3 className="mt-2 text-3xl font-bold">{weather.humidity}%</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Índice atual de umidade relativa.
              </p>
            </div>

            {/* Vento */}
            <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Wind className="size-7 text-primary" />
              </div>

              <p className="text-sm text-muted-foreground">
                Velocidade do vento
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                {weather.windspeed} km/h
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Ventos registrados na região de Poranga.
              </p>
            </div>

            {/* Nascer do Sol */}
            <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-900/20">
                <Sunrise className="size-7 text-amber-500" />
              </div>

              <p className="text-sm text-muted-foreground">Nascer do Sol</p>

              <h3 className="mt-2 text-2xl font-bold">
                {new Date(weather.sunrise).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Horário previsto para o amanhecer.
              </p>
            </div>

            {/* Pôr do Sol */}
            <div className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/20">
                <Sunset className="size-7 text-orange-500" />
              </div>

              <p className="text-sm text-muted-foreground">Pôr do Sol</p>

              <h3 className="mt-2 text-2xl font-bold">
                {new Date(weather.sunset).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Horário previsto para o entardecer.
              </p>
            </div>
          </div>
          {/* =========================
    Previsão dos Próximos Dias
========================= */}
          <div className="border-t">
            <button
              type="button"
              onClick={() => setShowForecast(!showForecast)}
              className="flex w-full items-center justify-between px-8 py-6 transition-all duration-300 hover:bg-muted/40"
            >
              <div className="text-left">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  🌤️ Vai conhecer Poranga?
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  Previsão para os próximos 7 dias
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Veja a previsão completa antes de visitar os atrativos de
                  Poranga.
                </p>
              </div>

              <ChevronDown
                className={`size-8 transition-transform duration-300 ${
                  showForecast ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showForecast
                  ? "max-h-[2200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t bg-muted/20 p-8">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                  {weather.forecast.map((day) => (
                    <div
                      key={day.date}
                      className="rounded-2xl border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {new Date(day.date).toLocaleDateString("pt-BR", {
                          weekday: "short",
                        })}
                      </p>

                      <div className="my-5 flex justify-center">
                        <WeatherIcon code={day.weathercode} />
                      </div>

                      <p className="min-h-[42px] text-sm text-muted-foreground">
                        {getWeatherDescription(day.weathercode)}
                      </p>

                      <div className="mt-5 flex justify-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">
                          {day.tempMax}°
                        </span>

                        <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">
                          {day.tempMin}°
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t pt-8">
                  <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                    <div>
                      <p className="font-medium">
                        Dados meteorológicos fornecidos pela Open-Meteo.
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Última atualização às {weather.updatedAt}.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowForecast(false)}
                      className="rounded-full border px-6 py-3 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      Ocultar previsão
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
