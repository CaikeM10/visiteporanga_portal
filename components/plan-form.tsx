'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function PlanForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          Recebemos sua mensagem!
        </h3>
        <p className="max-w-md text-pretty text-muted-foreground">
          Nossa equipe de turismo entrará em contato em breve para ajudar a
          planejar sua visita a Poranga. Obrigado pelo interesse!
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="font-heading text-2xl font-semibold text-foreground">
        Fale com o turismo de Poranga
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Tem dúvidas ou quer ajuda para montar seu roteiro? Envie sua mensagem.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            required
            className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="data" className="text-sm font-medium text-foreground">
          Período pretendido da visita
        </label>
        <input
          id="data"
          name="data"
          type="text"
          placeholder="Ex.: julho de 2026"
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/40 focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
      >
        Enviar mensagem
        <Send className="size-4" />
      </button>
    </form>
  )
}
