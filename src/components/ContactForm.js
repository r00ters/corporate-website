"use client"

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xoqrlolp");

    var submitElement = (
        <input
            disabled={state.submitting}
            type="submit"
            value="Invia"
        />);

    if (state.succeeded) {
        submitElement = <p>Grazie per averci contattato</p>;
    }

    return (
        <>
            <article>
                <h2>Contattaci</h2>
                <p>Per qualsiasi domanda o richiesta di informazioni, non esitare a contattarci compilando il modulo sottostante. Siamo qui per aiutarti e rispondere a tutte le tue esigenze.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Indirizzo email</label>
                    <input id="email" type="email" name="email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <label htmlFor="message">Messaggio</label>
                    <textarea id="message" name="message" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    {submitElement}
                    <ValidationError errors={state.errors} />
                </form>
            </article>
        </>
    );
}
