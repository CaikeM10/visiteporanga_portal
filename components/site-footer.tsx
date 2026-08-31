import Image from "next/image";
import Link from "next/link";

import { Camera, Globe, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

import { navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:py-20">
        {/* ═══════════════════════════════════════
            CONTEÚDO PRINCIPAL
        ═══════════════════════════════════════ */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* MARCA */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-4">
              <Image
                src="/brasao-poranga.jpg"
                alt="Brasão do Município de Poranga"
                width={64}
                height={64}
                className="
                  h-16
                  w-16
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <div>
                <h2 className="font-heading text-3xl font-semibold text-foreground">
                  Visite Poranga
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  A Capital dos Ventos do Ceará.
                </p>
              </div>
            </Link>

            <p
              className="
                mt-8
                max-w-md
                text-base
                leading-8
                text-muted-foreground
              "
            >
              O portal Poranga reúne natureza, história, cultura, gastronomia e
              experiências para ajudar visitantes a descobrirem um dos destinos
              mais autênticos do interior do Ceará.
            </p>

            <p className="mt-8 font-heading text-xl text-foreground">
              Onde a natureza encontra a história.
            </p>
          </div>

          {/* EXPLORAR */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Explorar
            </h3>

            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-muted-foreground
                      transition-all
                      duration-300
                      hover:text-primary
                    "
                  >
                    <ArrowRight
                      className="
                        size-4
                        -translate-x-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESCUBRA */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Descubra
            </h3>

            <ul className="mt-6 space-y-4 text-foreground">
              <li>
                <Link
                  href="/pontos-turisticos"
                  className="transition hover:text-primary"
                >
                  O que fazer
                </Link>
              </li>

              <li>
                <Link
                  href="/guia-local"
                  className="transition hover:text-primary"
                >
                  Onde comer
                </Link>
              </li>

              <li>
                <Link
                  href="/planeje-sua-visita"
                  className="transition hover:text-primary"
                >
                  Onde ficar
                </Link>
              </li>

              <li>
                <Link href="/eventos" className="transition hover:text-primary">
                  Eventos
                </Link>
              </li>

              <li>
                <Link href="/blog" className="transition hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* INFORMAÇÕES */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Informações
            </h3>

            <div className="mt-6 space-y-5 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />

                <span>
                  Poranga
                  <br />
                  Ceará • Brasil
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />

                <span className="break-all">turismo@poranga.ce.gov.br</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />

                <span>Secretaria Municipal de Turismo</span>
              </div>

              {/* REDES */}
              <div className="pt-3">
                <p className="mb-3 font-medium text-foreground">Conecte-se</p>

                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/visiteporanga"
                    target="_blank"
                    aria-label="Instagram do Visite Poranga"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Camera className="size-5" />
                  </a>

                  <Link
                    href="/"
                    aria-label="Portal Visite Poranga"
                    className="
                      inline-flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <Globe className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            COOPERAÇÃO INSTITUCIONAL
        ═══════════════════════════════════════ */}
        <div className="mt-10 border-t border-primary/10 pt-8">
          <div>
            {/* TEXTO */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Cooperação institucional
              </p>

              <h3 className="mt-3 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                Turismo, natureza e desenvolvimento sustentável
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                O Visite Poranga é desenvolvido em cooperação institucional com
                o Município de Poranga e a Secretaria responsável pelo turismo e
                meio ambiente.
              </p>
            </div>

            {/* LOGOS INSTITUCIONAIS */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-start
                gap-6
                sm:flex-row
                sm:items-center
                sm:gap-8
              "
            >
              {/* PREFEITURA */}
              <Image
                src="/institucional/LOGO%20prefeitura.png"
                alt="Prefeitura Municipal de Poranga"
                width={140}
                height={140}
                unoptimized
                className="
                  block
                  h-auto
                  w-[100px]
                  object-contain
                  sm:w-[115px]
                  lg:w-[125px]
                "
              />

              {/* DIVISOR DESKTOP */}
              <div
                aria-hidden="true"
                className="
                  hidden
                  h-12
                  w-px
                  shrink-0
                  bg-primary/15
                  sm:block
                "
              />

              {/* SECRETARIA */}
              <Image
                src="/institucional/logosecmeioambiente.png"
                alt="Secretaria de Meio Ambiente, Ecoturismo e Turismo Sustentável"
                width={300}
                height={100}
                unoptimized
                className="
                  block
                  h-auto
                  w-[220px]
                  object-contain
                  object-left
                  sm:w-[250px]
                  lg:w-[280px]
                "
              />
            </div>
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="my-8 h-px bg-border" />

        {/* ═══════════════════════════════════════
            RODAPÉ INFERIOR
        ═══════════════════════════════════════ */}
        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Visite Poranga. Todos os direitos
              reservados.
            </p>

            <p>Portal do Município de Poranga.</p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground lg:text-right">
            <p>
              Desenvolvido com orgulho para valorizar o turismo e a cultura
              poranguense.
            </p>

            <p>
              Projeto desenvolvido por{" "}
              <a
                href="https://www.caikemarinho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-semibold
                  text-primary
                  transition
                  hover:underline
                "
              >
                Caike Marinho | Soluções Digitais
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
