import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata = {
  title: 'Пицца в Петрозаводске "Тик Тайм". Доставка Пиццы ',
  description:
    "Пицца в Петрозаводске от пиццерии «Тик Тайм», бесплатная доставка по всему городу. Закажите свою пиццу из нашего меню.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
