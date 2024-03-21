import type { Metadata } from 'next';
import Header from './MeuCastelo/page';
import Footer from './Footer/page';
import './css/estilo.css';

export const metadata: Metadata = {
  title: 'Criando Rotas com NEXT',
  description: 'Aula 07-03',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MeuCastelo />
      </body>
    </html>
  );
}
