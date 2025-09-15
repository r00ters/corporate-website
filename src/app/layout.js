import "../styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Rooters > Il tuo alleato IT',
  description: 'Rooters SRLS - Your ultimate IT partner from integration to security.',
  colorScheme: 'dark' /* TODO: sembra non funzionare, dovrebbe megenare <meta name="color-scheme" ...> */
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" data-theme="dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
