import { MenuItemTypes } from "@/types";
import porkRoast from "../public/assets/images/pizza-pork-roast.webp";
import americana from "../public/assets/images/pizza-americana.webp";
import caesar from "../public/assets/images/pizza-caesar.webp";
import carbonara from "../public/assets/images/pizza-carbonara.webp";
import chickenBlueCheese from "../public/assets/images/pizza-chicken-blue-cheese.webp";
import chickenSausages from "../public/assets/images/pizza-chicken-sausages.webp";
import classic from "../public/assets/images/pizza-classic.webp";
import country from "../public/assets/images/pizza-country.webp";
import donKebab from "../public/assets/images/pizza-don-kebab.webp";
import fourCheeses from "../public/assets/images/pizza-four-cheeses.webp";
import fourSeasons from "../public/assets/images/pizza-four-seasons.webp";
import hamBacon from "../public/assets/images/pizza-ham-bacon.webp";
import hawaii from "../public/assets/images/pizza-hawaii.webp";
import hunter from "../public/assets/images/pizza-hunter.webp";
import julien from "../public/assets/images/pizza-julien.webp";
import margarita from "../public/assets/images/pizza-margarita.webp";
import meatHit from "../public/assets/images/pizza-meat-hit.webp";
import meat from "../public/assets/images/pizza-meat.webp";
import pepperoni from "../public/assets/images/pizza-pepperoni.webp";
import ranch from "../public/assets/images/pizza-ranch.webp";
import sizzlingBarbecue from "../public/assets/images/pizza-sizzling-barbecue.webp";
import chickenBurger from "../public/assets/images/pizza-chicken-burger.webp";
import cheese from "../public/assets/images/pizza-cheese.webp";

export const menu: MenuItemTypes[] = [
  {
    id: 0,
    title: "Пицца ЧикенБургер",
    image: chickenBurger,
    ingredients:
      "Копченая курица, моцарелла, маринованные огурцы, болгарский перец, красный лук, соус бургер Heinz, фирменный томатный соус, тесто",
    price: 399,
  },
  {
    id: 1,
    title: "Пицца Запечённая Буженина",
    image: porkRoast,
    ingredients:
      "Буженина из свинины, моцарелла, маринованные огурцы, лук фри, лук красный, майонезный соус, тесто",
    price: 399,
  },
  {
    id: 2,
    title: "Пицца Мясной Хит",
    image: meatHit,
    ingredients:
      "Ветчина, буженина из свинины, охотничьи колбаски, моцарелла, фирменный томатный соус, майонезный соус, тесто",
    price: 399,
  },
  {
    id: 3,
    title: "Пицца Курица и Колбаски",
    image: chickenSausages,
    ingredients:
      "Копченая курица, охотничьи колбаски, моцарелла, маринованные огурцы, томаты, красный лук, свежий укроп, майонезный соус, кетчуп, тесто",
    price: 399,
  },
  {
    id: 4,
    title: "Пицца Курочка Блю Чиз",
    image: chickenBlueCheese,
    ingredients:
      "Много курицы, моцарелла, сыр блю чиз с голубой плесенью, соус ранч, тесто",
    price: 399,
  },
  {
    id: 5,
    title: "Пицца Классика",
    image: classic,
    ingredients:
      "Ветчина, пепперони, моцарелла, пармезан, шампиньоны, фирменный соус томатный, тесто",
    price: 399,
  },
  {
    id: 6,
    title: "Пицца Жюльен",
    image: julien,
    ingredients:
      "Бекон, копчёная курица, моцарелла, чеддер, свежие шампиньоны, сливки, укроп, майонезный соус, тесто",
    price: 399,
  },
  {
    id: 7,
    title: "Пицца Ветчина и бекон",
    image: hamBacon,
    ingredients:
      "Ветчина, бекон, моцарелла, чеддер, красный лук, соус цезарь, тесто",
    price: 399,
  },
  {
    id: 8,
    title: "Пицца Американа",
    image: americana,
    ingredients:
      "Бекон, моцарелла, чеддер, маринованные огурцы, фирменный томатный соус, медово - горчичный соус, тесто",
    price: 399,
  },
  {
    id: 9,
    title: "Пицца Цезарь",
    image: caesar,
    ingredients:
      "Копчёная курица, салат айсберг, моцарелла, пармезан, томаты, соус цезарь, тесто",
    price: 399,
  },
  {
    id: 10,
    title: "Пицца Дон Кебаб",
    image: donKebab,
    ingredients:
      "Копченая курица, моцарелла, свежие огурцы, томаты, красный лук, салат айсберг, свежий укроп, кетчуп, майонезный соус, тесто",
    price: 399,
  },
  {
    id: 11,
    title: "Пицца Гавайская",
    image: hawaii,
    ingredients:
      "Много бекона, моцарелла, ананасы, фирменный томатный соус, тесто",
    price: 399,
  },
  {
    id: 12,
    title: "Пицца Охотничья",
    image: hunter,
    ingredients:
      "Пепперони, охотничьи колбаски, моцарелла, свежие шампиньоны, свежий укроп, соус ранч, фирменный томатный соус, тест",
    price: 399,
  },
  {
    id: 13,
    title: "Пицца 4 сезона",
    image: fourSeasons,
    ingredients:
      "Фирменный томатный соус, моцарелла, пепперони, ветчина, охотничьи колбаски, буженина из свинины, сыр блю чиз, сыр фета, томаты",
    price: 579,
  },
  {
    id: 14,
    title: "Пицца Пепперони",
    image: pepperoni,
    ingredients:
      "Много пепперони, много моцареллы, фирменный томатный соус, тесто",
    price: 399,
  },
  {
    id: 15,
    title: "Пицца Деревенская",
    image: country,
    ingredients:
      "Ветчина, копчёная курица, моцарелла, зеленый лук, маринованные огурцы, майонезный соус, фирменный томатный соус, тесто",
    price: 399,
  },
  {
    id: 16,
    title: "Пицца Ранч",
    image: ranch,
    ingredients:
      "Копчёная курица, ветчина, моцарелла, томаты, чеснок, соус ранч, тесто",
    price: 399,
  },
  {
    id: 17,
    title: "Пицца Жгучая Барбекю",
    image: sizzlingBarbecue,
    ingredients:
      "Пепперони, моцарелла, красный лук, халапеньо, болгарский перец, фирменный томатный соус, барбекю соус, тесто",
    price: 399,
  },
  {
    id: 18,
    title: "Пицца Карбонара",
    image: carbonara,
    ingredients:
      "Много бекона, моцарелла, пармезан, томаты, сливки, свежий укроп, соус ранч, тесто",
    price: 399,
  },
  {
    id: 19,
    title: "Пицца 4 сыра",
    image: fourCheeses,
    ingredients:
      "Моцарелла, сыр блю чиз с голубой плесенью, фета, пармезан, соус ранч, тесто",
    price: 465,
  },
  {
    id: 20,
    title: "Пицца Сырная",
    image: cheese,
    ingredients: "Моцарелла ,чеддер, фета, соус цезарь, тесто",
    price: 399,
  },
  {
    id: 21,
    title: "Пицца Мясная",
    image: meat,
    ingredients:
      "Пепперони, ветчина, копчёная курица, моцарелла, майонезный соус, фирменный томатный соус, тесто",
    price: 399,
  },
  {
    id: 22,
    title: "Пицца Маргарита",
    image: margarita,
    ingredients:
      "Очень много моцареллы, томаты, фирменный томатный соус, тесто",
    price: 399,
  },
];
