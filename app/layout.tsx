import "./globals.css";
import { BackToTopButton, Footer, Header } from "@/components";
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
          <div className="w-full min-h-full flex flex-col items-center overflow-hidden min-w-[320px]">
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
