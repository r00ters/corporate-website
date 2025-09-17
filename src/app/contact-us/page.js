"use client"

import Image from 'next/image';
import Link from 'next/link';
import { CircleCheckBig } from "lucide-react";
import ContactForm from '@/components/ContactForm';

export default function ContactUs() {

    return (
        <>
            <header className="container-fluid page header contact-us">
                <h1><mark>Contattaci</mark></h1>
                <nav aria-label="breadcrumb">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li aria-current="page">Contatti</li>
                    </ul>
                </nav>
            </header>
            <main className="page container full-width">
                <div className="grid" if="contact-form">
                    <ContactForm />
                </div>
            </main>
        </>
    );
}
