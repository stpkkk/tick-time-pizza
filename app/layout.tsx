import './globals.css';
import { Providers } from './providers';
import { ButtonBackToTop, Footer, Header } from '@/components';

export const metadata = {
  title: 'pizza',
  description: 'Пицца',
  robots: {
    index: false,
    follow: false,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <Providers>
        <body>
          <Header />
          {children}
          <Footer />
          <ButtonBackToTop />
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
