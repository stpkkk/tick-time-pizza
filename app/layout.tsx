import "./globals.css";
import { Footer, Header } from "@/components";
import { Providers } from "./providers";

export const metadata = {
  title: 'Пицца в Петрозаводске "Тик Тайм". Доставка Пиццы ',
  description:
    "Пицца в Петрозаводске от пиццерии «Тик Тайм», бесплатная доставка по всему городу. Закажите свою пиццу из нашего меню.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
