import './globals.css';
import { Providers } from './providers';
import {
  ButtonBackToTop,
  AppFooter,
  Header,
  ModalAttention,
} from '@/components';

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
          <AppFooter />
          <ButtonBackToTop />
          <ModalAttention />
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
