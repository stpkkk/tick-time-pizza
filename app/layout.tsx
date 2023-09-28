import './globals.css';
import { Providers } from './providers';
import { BackToTopButton, Footer, Header } from '@/components';

export const metadata = {
  title: 'Пицца в Петрозаводске "Тик Тайм". Доставка Пиццы ',
  description:
    'Пицца в Петрозаводске от пиццерии «Тик Тайм», бесплатная доставка по всему городу. Закажите свою пиццу из нашего меню.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ru'>
      <body>
        <Providers>
          <div className='flex min-h-full w-full min-w-[320px] flex-col items-center overflow-hidden'>
            <Header />
            {children}
            <Footer />
            <BackToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
