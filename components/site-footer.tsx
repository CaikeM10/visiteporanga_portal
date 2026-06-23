import Link from "next/link";
import { Camera, Globe, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20">
        {/* Conteúdo principal */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Marca */}

          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-4">
              <img
                src="/brasão.jpg"
                alt="Visite Poranga"
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
                  Portal Oficial de Turismo
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
              O portal oficial de turismo de Poranga reúne natureza, história,
              cultura, gastronomia e experiências para ajudar visitantes a
              descobrirem um dos destinos mais autênticos do interior do Ceará.
            </p>

            <p className="mt-8 font-heading text-xl text-foreground">
              Onde a natureza encontra a história.
            </p>
          </div>

          {/* Explorar */}

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
                        opacity-0
                        -translate-x-2
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

          {/* Descubra */}

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Descubra
            </h3>

            <ul className="mt-6 space-y-4">
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

          {/* Informações */}

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Informações
            </h3>

            <div className="mt-6 space-y-5 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-primary" />

                <span>
                  Poranga
                  <br />
                  Ceará • Brasil
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-primary" />

                <span>turismo@poranga.ce.gov.br</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 text-primary" />

                <span>Secretaria Municipal de Turismo</span>
              </div>

              <div className="pt-3">
                <p className="mb-3 font-medium text-foreground">Conecte-se</p>

                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/visiteporanga"
                    target="_blank"
                    rel="noreferrer"
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

                  <a
                    href="/"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha */}

        <div className="my-16 h-px bg-border" />

        {/* Rodapé inferior */}

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

            <p>Portal Oficial de Turismo do Município de Poranga.</p>
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
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
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
