import { IProduct } from "@/types"
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
import italian from "../public/assets/images/pizza-italian.webp";

import mozzarella from "../public/assets/images/adds-mozzarella.png";
import onionGreen from "../public/assets/images/adds-onion-green.png";
import bacon from "../public/assets/images/adds-bacon.png";
import onionBulb from "../public/assets/images/adds-onion-bulb.png";
import cheeseSide from "../public/assets/images/adds-cheese-side.png";
import heart from "../public/assets/images/adds-heart.png";
import jalapeno from "../public/assets/images/adds-jalapeno.png";
import tomato from "../public/assets/images/adds-tomato.png";
import champignon from "../public/assets/images/adds-champignon.png";
import chickenSmoked from "../public/assets/images/adds-chicken-smoked.png";
import ham from "../public/assets/images/adds-ham.png";
import huntingSausages from "../public/assets/images/adds-hunting-sausages.png";
import pickledCucumbers from "../public/assets/images/adds-pickled-cucumbers.png";
import cheeseParmesan from "../public/assets/images/adds-cheese-parmesan.png";
import cheeseChedder from "../public/assets/images/adds-cheese-chedder.png";
import pimiento from "../public/assets/images/adds-pimiento.png";
import dill from "../public/assets/images/adds-dill.png";
import garlic from "../public/assets/images/adds-garlic.png";
import roastPork from "../public/assets/images/adds-roast-pork.png";
import onionFree from "../public/assets/images/adds-onion-free.png";
import pineapple from "../public/assets/images/adds-pineapple.png";
import cheeseBlue from "../public/assets/images/adds-cheese-blue.png";
import cheeseFeta from "../public/assets/images/adds-cheese-feta.png";
import sauce from "../public/assets/images/adds-sauce.png";
import pepperoniAdds from "../public/assets/images/adds-pepperoni.png";

import bear from "../public/assets/images/cat-bear.webp";
import fire from "../public/assets/images/cat-fire.webp";
import leaf from "../public/assets/images/cat-leaf.webp";

export const menu: IProduct[] = [
  {
    id: 0,
    title: "Пицца ЧикенБургер",
    image: chickenBurger,
    ingredients:
      "Копченая курица, моцарелла, маринованные огурцы, болгарский перец, красный лук, соус бургер Heinz, фирменный томатный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
			{
				id: 3, image: tomato, name: "Томаты",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
      {
        id: 4,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 5, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 6,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 7, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 8, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 9,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 10,
        image: pimiento,
        name: "Болгарский Перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 11,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 12,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 13,
        image: roastPork,
        name: "Буженина",
				maxAmount: 3,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 60 }, { id: 2, value: 90 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 75 }, { id: 2, price: 105 }]
      },
      {
        id: 14,
        image: onionFree,
        name: "Лук Фри",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 17 }, { id: 2, value: 23 }],
				prices: [{ id: 0, price: 10 }, { id: 1, price: 20 }, { id: 2, price: 30 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Соус Бургер на пиццу",
				maxAmount: 3,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Копченая Курица" },
      { id: 1, name: "Огурцы Маринованные" },
      { id: 2, name: "Лук Репчатый" },
      { id: 3, name: "Болгарский Перец" },
      { id: 4, name: "Соус Бургер" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 10.7,
      fats: 7.64,
      carbohydrates: 31.37,
      calories: 237.06,
    },
		weights: [{ id: 0, weight: 400 }, { id: 1, weight: 620 }, { id: 2, weight: 855 }, { id: 3, weight: 530 }, { id: 4, weight: 765 }]
  },
  {
    id: 1,
    title: "Пицца Итальянская",
    image: italian,
    ingredients:
      "Пепперони, два вида сыра моцареллы, шампиньоны, фирменный томатный соус, базилик, орегано, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
      {
        id: 2,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 3, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: cheeseBlue,
        name: "Сыр Блю Чиз",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 95 }, { id: 2, price: 115 }]
      },
      {
        id: 15,
        image: pimiento,
        name: "Болгарский Перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 16,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 17,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 18,
        image: roastPork,
        name: "Буженина",
				maxAmount: 3,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 60 }, { id: 2, value: 90 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 75 }, { id: 2, price: 105 }]
      },
      {
        id: 19,
        image: onionFree,
        name: "Лук Фри",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 17 }, { id: 2, value: 23 }],
				prices: [{ id: 0, price: 10 }, { id: 1, price: 20 }, { id: 2, price: 30 }]
      },
      {
        id: 20,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 21,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 22,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 23,
        image: sauce,
        name: "Соус Бургер на пиццу",
				maxAmount: 3,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]

      },
    ],
    removeIngredients: [
      { id: 0, name: "Шампиньоны" },
      { id: 1, name: "Пепперони" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 13.02,
      fats: 11.36,
      carbohydrates: 34.41,
      calories: 291.98,
    },
		weights: [{ id: 0, weight: 360 }, { id: 1, weight: 540 }, { id: 2, weight: 730 }, { id: 3, weight: 450 }, { id: 4, weight: 640 }]
  },
  {
    id: 2,
    title: "Пицца Запечённая Буженина",
    image: porkRoast,
    ingredients:
      "Буженина из свинины, моцарелла, маринованные огурцы, лук фри, лук красный, майонезный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 10, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 11, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 12,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 13,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 14,
				image: roastPork,
        name: "Буженина",
				maxAmount: 3,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 60 }, { id: 2, value: 90 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 75 }, { id: 2, price: 105 }]
      },
      {
        id: 15,
        image: onionFree,
        name: "Лук Фри",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 17 }, { id: 2, value: 23 }],
				prices: [{ id: 0, price: 10 }, { id: 1, price: 20 }, { id: 2, price: 30 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Огурцы Маринованные" },
      { id: 1, name: "Лук Репчатый" },
      { id: 2, name: "Буженина" },
      { id: 3, name: "Лук Фри" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 9.98,
      fats: 13.21,
      carbohydrates: 34.18,
      calories: 295.5,
    },
		weights: [{ id: 0, weight: 380 }, { id: 1, weight: 570 }, { id: 2, weight: 800 }, { id: 3, weight: 500 }, { id: 4, weight: 710 }]
  },
  {
    id: 3,
    title: "Пицца Мясной Хит",
    image: meatHit,
    ingredients:
      "Ветчина, буженина из свинины, охотничьи колбаски, моцарелла, фирменный томатный соус, майонезный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 10,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: pimiento,
        name: "Болгарский перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 15,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 16,
        image: roastPork,
        name: "Буженина",
				maxAmount: 3,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 60 }, { id: 2, value: 90 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 75 }, { id: 2, price: 105 }]
      },
      {
        id: 17,
        image: onionFree,
        name: "Лук Фри",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 17 }, { id: 2, value: 23 }],
				prices: [{ id: 0, price: 10 }, { id: 1, price: 20 }, { id: 2, price: 30 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 20,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 21,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Ветчина" },
      { id: 1, name: "Охотничьи Колбаски" },
      { id: 2, name: "Буженина" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 11.3,
      fats: 12.6,
      carbohydrates: 35.85,
      calories: 301.8,
    },
		weights: [{ id: 0, weight: 380 }, { id: 1, weight: 580 }, { id: 2, weight: 780 }, { id: 3, weight: 500 }, { id: 4, weight: 700 }]
  },
  {
    id: 4,
    title: "Пицца Курица и Колбаски",
    image: chickenSausages,
    ingredients:
      "Копченая курица, охотничьи колбаски, моцарелла, маринованные огурцы, томаты, красный лук, свежий укроп, майонезный соус, кетчуп, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 8,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 9,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 10, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 11,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 12,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 13,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 14,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Томаты" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Охотничьи Колбаски" },
      { id: 3, name: "Огурцы Маринованные" },
      { id: 4, name: "Лук Репчатый" },
      { id: 5, name: "Укроп" },
      { id: 6, name: "Майонезный соус" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 9.88,
      fats: 11.58,
      carbohydrates: 29.88,
      calories: 263.26,
    },
		weights: [{ id: 0, weight: 400 }, { id: 1, weight: 630 }, { id: 2, weight: 860 }, { id: 3, weight: 480 }, { id: 4, weight: 780 }]
  },
  {
    id: 5,
    title: "Пицца Курочка Блю Чиз",
    image: chickenBlueCheese,
    ingredients:
      "Много курицы, моцарелла, сыр блю чиз с голубой плесенью, соус ранч, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 10, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 11, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 12,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 13,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: pineapple,
        name: "Ананасы",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 45 }, { id: 2, price: 65 }]
      },
      {
        id: 15,
        image: cheeseBlue,
        name: "Сыр Блю Чиз",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 95 }, { id: 2, price: 115 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Сыр Моцарелла" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Соус Ранч" },
      { id: 3, name: "Сыр Блю Чиз" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 13.06,
      fats: 13.84,
      carbohydrates: 34.92,
      calories: 316.47,
    },
		weights: [{ id: 0, weight: 355 }, { id: 1, weight: 520 }, { id: 2, weight: 700 }, { id: 3, weight: 430 }, { id: 4, weight: 610 }]
  },
  {
    id: 6,
    title: "Пицца Классика",
    image: classic,
    ingredients:
      "Ветчина, пепперони, моцарелла, пармезан, шампиньоны, фирменный соус томатный, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 11,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 12, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 13, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 14,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 15,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 16,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 17,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Сыр Моцарелла" },
      { id: 1, name: "Шампионьоны" },
      { id: 2, name: "Ветчина" },
      { id: 3, name: "Пепперони" },
      { id: 4, name: "Сыр Пармезан" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 13.47,
      fats: 12.34,
      carbohydrates: 32.93,
      calories: 296.61,
    },
		weights: [{ id: 0, weight: 380 }, { id: 1, weight: 550 }, { id: 2, weight: 750 }, { id: 3, weight: 460 }, { id: 4, weight: 660 }]
  },
  {
    id: 7,
    title: "Пицца Жюльен",
    image: julien,
    ingredients:
      "Бекон, копчёная курица, моцарелла, чеддер, свежие шампиньоны, сливки, укроп, майонезный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 10,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Шампиньоны" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Бекон" },
      { id: 3, name: "Сыр Чеддер" },
      { id: 4, name: "Укроп" },
      { id: 5, name: "Майонезеный соус" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 12.86,
      fats: 15.43,
      carbohydrates: 32.77,
      calories: 321.35,
    },
		weights: [{ id: 0, weight: 382 }, { id: 1, weight: 570 }, { id: 2, weight: 770 }, { id: 3, weight: 480 }, { id: 4, weight: 680 }]
  },
  {
    id: 8,
    title: "Пицца Ветчина и бекон",
    image: hamBacon,
    ingredients:
      "Ветчина, бекон, моцарелла, чеддер, красный лук, соус цезарь, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 10,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 15,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 16,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 20,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Ветчина" },
      { id: 1, name: "Бекон" },
      { id: 2, name: "Лук Репчатый" },
      { id: 3, name: "Сыр Чеддер" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 13.04,
      fats: 14.2,
      carbohydrates: 35.86,
      calories: 323.37,
    },
		weights: [{ id: 0, weight: 375 }, { id: 1, weight: 530 }, { id: 2, weight: 710 }, { id: 3, weight: 450 }, { id: 4, weight: 620 }]
  },
  {
    id: 9,
    title: "Пицца Американа",
    image: americana,
    ingredients:
      "Бекон, моцарелла, чеддер, маринованные огурцы, фирменный томатный соус, медово - горчичный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 10, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 11, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 12,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 13,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 14,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Бекон" },
      { id: 1, name: "Огурцы Маринованные" },
      { id: 2, name: "Сыр Чеддер" },
      { id: 3, name: "Горчичный соус" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 12.37,
      fats: 11.46,
      carbohydrates: 35.39,
      calories: 294.17,
    },
		weights: [{ id: 0, weight: 385 }, { id: 1, weight: 570 }, { id: 2, weight: 760 }, { id: 3, weight: 480 }, { id: 4, weight: 670 }]
  },
  {
    id: 10,
    title: "Пицца Цезарь",
    image: caesar,
    ingredients:
      "Копчёная курица, салат айсберг, моцарелла, пармезан, томаты, соус цезарь, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
      {
        id: 5,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 6, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 7, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 8,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 9, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 10,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 11,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 12,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 13,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Томаты" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Сыр Пармезан" },
      { id: 3, name: "Листья Салата" },
    ],
    categories: [{ key: 0, title: "Подходит для Детей", image: bear }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 11.84,
      fats: 10.36,
      carbohydrates: 32.09,
      calories: 268.95,
    },
		weights: [{ id: 0, weight: 365 }, { id: 1, weight: 550 }, { id: 2, weight: 770 }, { id: 3, weight: 460 }, { id: 4, weight: 680 }]
  },
  {
    id: 11,
    title: "Пицца Дон Кебаб",
    image: donKebab,
    ingredients:
      "Копченая курица, моцарелла, свежие огурцы, томаты, красный лук, салат айсберг, свежий укроп, кетчуп, майонезный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 11,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 12, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 13, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 14,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 15,
        image: pimiento,
        name: "Болгарский перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 16,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 20,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Томаты" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Огурцы Свежие" },
      { id: 3, name: "Лук Репчатый" },
      { id: 4, name: "Укроп" },
      { id: 5, name: "Листья Салата" },
      { id: 6, name: "Соус Кетчуп" },
    ],
    categories: [{ key: 0, title: "Подходит для Детей", image: bear }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 9.38,
      fats: 9.57,
      carbohydrates: 29.77,
      calories: 242.68,
    },
		weights: [{ id: 0, weight: 400 }, { id: 1, weight: 620 }, { id: 2, weight: 850 }, { id: 3, weight: 530 }, { id: 4, weight: 770 }]
  },
  {
    id: 12,
    title: "Пицца Гавайская",
    image: hawaii,
    ingredients:
      "Много бекона, моцарелла, ананасы, фирменный томатный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
      {
        id: 5,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 6, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 7, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 8,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 9, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 10, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 11,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 12,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 13,
        image: pineapple,
        name: "Ананасы",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 45 }, { id: 2, price: 65 }]
      },
      {
        id: 14,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Бекон" },
      { id: 1, name: "Ананасы" },
    ],
    categories: [{ key: 0, title: "Подходит для Детей", image: bear }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 12.08,
      fats: 9.62,
      carbohydrates: 36.52,
      calories: 280.95,
    },
		weights: [{ id: 0, weight: 350 }, { id: 1, weight: 510 }, { id: 2, weight: 690 }, { id: 3, weight: 410 }, { id: 4, weight: 600 }]
  },
  {
    id: 13,
    title: "Пицца Охотничья",
    image: hunter,
    ingredients:
      "Пепперони, охотничьи колбаски, моцарелла, свежие шампиньоны, свежий укроп, соус ранч, фирменный томатный соус, тест",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 11,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 12, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 13, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 14,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Шампиньоны" },
      { id: 1, name: "Пепперони" },
      { id: 2, name: "Охотничьи Колбаски" },
      { id: 3, name: "Укроп" },
      { id: 4, name: "Соус Ранч" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 11.78,
      fats: 11.94,
      carbohydrates: 32.97,
      calories: 313.43,
    },
		weights: [{ id: 0, weight: 375 }, { id: 1, weight: 560 }, { id: 2, weight: 760 }, { id: 3, weight: 470 }, { id: 4, weight: 670 }]
  },
  {
    id: 14,
    title: "Пицца 4 сезона",
    image: fourSeasons,
    ingredients:
      "Фирменный томатный соус, моцарелла, пепперони, ветчина, охотничьи колбаски, буженина из свинины, сыр блю чиз, сыр фета, томаты",
		prices: [{ id: 0, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 50 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 50 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
      {
        id: 5,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 6, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 7, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 32 }, { id: 1, value: 32 }, { id: 2, value: 36 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 8,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 9, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 10, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 11,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 12,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 13,
        image: pineapple,
        name: "Ананасы",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 45 }, { id: 2, price: 65 }]
      },
      {
        id: 14,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Томаты" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Ветчина" },
      { id: 3, name: "Пепперони" },
      { id: 4, name: "Охотничьи Колбаски" },
      { id: 5, name: "Сыр Фета" },
      { id: 6, name: "Буженина" },
      { id: 7, name: "Сыр Блю Чиз" },
    ],
    sizes: [
			{ id: 0, name: null },
			{ id: 1, name: 28 },
			{ id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 12.54,
      fats: 10.07,
      carbohydrates: 34.15,
      calories: 277.39,
    },
		weights: [{ id: 1, weight: 530 }, { id: 2, weight: 700 }, { id: 3, weight: 450 }, { id: 4, weight: 610 }]
  },
  {
    id: 15,
    title: "Пицца Пепперони",
    image: pepperoni,
    ingredients:
      "Много пепперони, много моцареллы, фирменный томатный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
      {
        id: 5,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 6, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 7, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 10,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: pimiento,
        name: "Болгарский перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [{ id: 0, name: "Пепперони" }],
    categories: [{ key: 0, title: "Острая", image: fire }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 14.33,
      fats: 13.38,
      carbohydrates: 33.12,
      calories: 310.17,
    },
		weights: [{ id: 0, weight: 365 }, { id: 1, weight: 530 }, { id: 2, weight: 720 }, { id: 3, weight: 440 }, { id: 4, weight: 630 }]
  },
  {
    id: 16,
    title: "Пицца Деревенская",
    image: country,
    ingredients:
      "Ветчина, копчёная курица, моцарелла, зеленый лук, маринованные огурцы, майонезный соус, фирменный томатный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 11,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 12, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 13, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 14,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 15,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Копченая Курица" },
      { id: 1, name: "Ветчина" },
      { id: 2, name: "Огурцы Маринованные" },
      { id: 3, name: "Зеленый Лук" },
      { id: 4, name: "Майонезный соус" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 11.56,
      fats: 12.67,
      carbohydrates: 31.21,
      calories: 285.12,
    },
		weights: [{ id: 0, weight: 390 }, { id: 1, weight: 600 }, { id: 2, weight: 810 }, { id: 3, weight: 510 }, { id: 4, weight: 730 }]
  },
  {
    id: 17,
    title: "Пицца Ранч",
    image: ranch,
    ingredients:
      "Копчёная курица, ветчина, моцарелла, томаты, чеснок, соус ранч, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 10,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 14,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Томаты" },
      { id: 1, name: "Копченая Курица" },
      { id: 2, name: "Ветчина" },
      { id: 3, name: "Чеснок" },
      { id: 4, name: "Майонезный соус" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 11.42,
      fats: 16.11,
      carbohydrates: 32.63,
      calories: 321.23,
    },
		weights: [{ id: 0, weight: 395 }, { id: 1, weight: 590 }, { id: 2, weight: 800 }, { id: 3, weight: 500 }, { id: 4, weight: 710 }]
  },
  {
    id: 18,
    title: "Пицца Жгучая Барбекю",
    image: sizzlingBarbecue,
    ingredients:
      "Пепперони, моцарелла, красный лук, халапеньо, болгарский перец, фирменный томатный соус, барбекю соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 11,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 12, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 13, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 14,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Перец Халапеньо" },
      { id: 1, name: "Пепперони" },
      { id: 2, name: "Лук Репчатый" },
      { id: 3, name: " Болгарский Перец" },
      { id: 4, name: "Барбекю соус" },
    ],
    categories: [{ key: 0, title: "Острая", image: fire }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 11.32,
      fats: 9.25,
      carbohydrates: 35.25,
      calories: 269.56,
    },
		weights: [{ id: 0, weight: 385 }, { id: 1, weight: 570 }, { id: 2, weight: 780 }, { id: 3, weight: 480 }, { id: 4, weight: 690 }]
  },
  {
    id: 19,
    title: "Пицца Карбонара",
    image: carbonara,
    ingredients:
      "Много бекона, моцарелла, пармезан, томаты, сливки, свежий укроп, соус ранч, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 10, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 11, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 12,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 13,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: pimiento,
        name: "Болгарский перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 15,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 16,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 20,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Томаты" },
      { id: 1, name: "Бекон" },
      { id: 2, name: "Сыр Пармезан" },
      { id: 3, name: "Укроп" },
    ],
    categories: [{ key: 0, title: "Подходит для Детей", image: bear }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 12.24,
      fats: 14.15,
      carbohydrates: 33.54,
      calories: 310.48,
    },
		weights: [{ id: 0, weight: 365 }, { id: 1, weight: 530 }, { id: 2, weight: 720 }, { id: 3, weight: 440 }, { id: 4, weight: 640 }]
  },
  {
    id: 20,
    title: "Пицца 4 сыра",
    image: fourCheeses,
    ingredients:
      "Моцарелла, сыр блю чиз с голубой плесенью, фета, пармезан, соус ранч, тесто",
		prices: [{ id: 0, price: 465 }, { id: 1, price: 655 }, { id: 2, price: 875 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 10, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 11, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 12,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 13,
        image: cheeseFeta,
        name: "Сыр Фета",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 20 }, { id: 2, value: 30 }],
				prices: [{ id: 0, price: 19 }, { id: 1, price: 29 }, { id: 2, price: 39 }],
      },
      {
        id: 14,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Сыр Пармезан" },
      { id: 1, name: "Сыр Фета" },
      { id: 2, name: "Сыр Блю Чиз" },
    ],
    categories: [
      { key: 0, title: "Без Мяса", image: leaf },
      { key: 1, title: "Подходит для Детей", image: bear },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 15.03,
      fats: 16.43,
      carbohydrates: 33.66,
      calories: 342.65,
    },
		weights: [{ id: 0, weight: 360 }, { id: 1, weight: 530 }, { id: 2, weight: 730 }, { id: 3, weight: 440 }, { id: 4, weight: 640 }]
  },
  {
    id: 21,
    title: "Пицца Сырная",
    image: cheese,
    ingredients: "Моцарелла ,чеддер, фета, соус цезарь, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: cheeseFeta,
        name: "Сыр Фета",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 20 }, { id: 2, value: 30 }],
				prices: [{ id: 0, price: 19 }, { id: 1, price: 29 }, { id: 2, price: 39 }],
      },
      {
        id: 15,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 16,
        image: pimiento,
        name: "Болгарский Перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 17,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 18,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 19,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 20,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 21,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Сыр Фета" },
      { id: 1, name: "Сыр Чеддер" },
    ],
    categories: [{ key: 0, title: "Подходит для Детей", image: bear }],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 14.3,
      fats: 13.9,
      carbohydrates: 35.49,
      calories: 324.23,
    },
		weights: [{ id: 0, weight: 355 }, { id: 1, weight: 520 }, { id: 2, weight: 700 }, { id: 3, weight: 430 }, { id: 4, weight: 620 }]
  },
  {
    id: 22,
    title: "Пицца Мясная",
    image: meat,
    ingredients:
      "Пепперони, ветчина, копчёная курица, моцарелла, майонезный соус, фирменный томатный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
			{
				id: 9, image: bacon, name: "Бекон",
				maxAmount: 5, weights: [{ id: 0, value: 23 }, { id: 1, value: 32 }, { id: 2, value: 36 }], prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
      {
        id: 10,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 11,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 12, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 13, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 14,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 15,
        image: sauce,
        name: "Барбекю Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 16,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 17,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [
      { id: 0, name: "Копченая Курица" },
      { id: 1, name: "Ветчина" },
      { id: 2, name: "Пепперони" },
      { id: 3, name: "Майонезный соус" },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 12.44,
      fats: 13.8,
      carbohydrates: 30.54,
      calories: 269.08,
    },
		weights: [{ id: 0, weight: 385 }, { id: 1, weight: 580 }, { id: 2, weight: 780 }, { id: 3, weight: 490 }, { id: 4, weight: 690 }]
  },
  {
    id: 23,
    title: "Пицца Маргарита",
    image: margarita,
    ingredients:
      "Очень много моцареллы, томаты, фирменный томатный соус, тесто",
		prices: [{ id: 0, price: 399 }, { id: 1, price: 579 }, { id: 2, price: 739 }],
    additionalIngredients: [
      {
        id: 0,
        image: mozzarella,
        name: "Сыр Моцарелла",
				maxAmount: 5,
				weights: [{ id: 0, value: 30 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 50 }, { id: 2, price: 65 }],
      },
      {
        id: 1,
        image: cheeseSide,
        name: "Сырный Бортик",
				maxAmount: 1,
				weights: [{ id: 0, value: 205 }, { id: 1, value: 205 }, { id: 2, value: 205 },],
				prices: [{ id: 0, price: 179 }, { id: 1, price: 179 }, { id: 2, price: 179 }],
      },
			{
				id: 2, image: heart, name: "Пицца \"Сердце\"",
				maxAmount: 1, weights: [{ id: 0, value: 1 }, { id: 1, value: 1 }, { id: 2, value: 1 }], prices: [{ id: 0, price: 95 }, { id: 1, price: 95 }, { id: 2, price: 95 }]
			},
      {
        id: 3,
        image: jalapeno,
        name: "Перец Халапеньо",
				maxAmount: 5,
				weights: [{ id: 0, value: 12 }, { id: 1, value: 25 }, { id: 2, value: 38 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 25 }, { id: 2, price: 35 }]
      },
			{
				id: 4, image: tomato, name: "Томаты",
				maxAmount: 5, weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }],
			},
			{
				id: 5, image: champignon, name: "Шампиньоны",
				maxAmount: 5, weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 6,
        image: chickenSmoked,
        name: "Копченая Курица",
				maxAmount: 5,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 50 }, { id: 2, value: 75 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
			{
				id: 7, image: ham, name: "Ветчина",
				maxAmount: 5, weights: [{ id: 0, value: 21 }, { id: 1, value: 34 }, { id: 2, value: 44 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 55 }, { id: 2, price: 65 }]
			},
			{
				id: 8, image: pepperoniAdds, name: "Пепперони",
				maxAmount: 5, weights: [{ id: 0, value: 26 }, { id: 1, value: 37 }, { id: 2, value: 49 }],
				prices: [{ id: 0, price: 45 }, { id: 1, price: 65 }, { id: 2, price: 85 }]
			},
      {
        id: 9,
        image: huntingSausages,
        name: "Охотничьи Колбаски",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 10,
        image: pickledCucumbers,
        name: "Огурцы Маринованные",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
      },
			{
				id: 11, image: onionBulb, name: "Лук Репчатый",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 5 }, { id: 1, price: 10 }, { id: 2, price: 15 }]
			},
			{
				id: 12, image: onionGreen, name: "Зеленый Лук",
				maxAmount: 5, weights: [{ id: 0, value: 8 }, { id: 1, value: 15 }, { id: 2, value: 25 }], prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 45 }]
			},
      {
        id: 13,
        image: cheeseParmesan,
        name: "Сыр Пармезан",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 55 }, { id: 2, price: 75 }]
      },
      {
        id: 14,
        image: cheeseFeta,
        name: "Сыр Фета",
				maxAmount: 5,
				weights: [{ id: 0, value: 10 }, { id: 1, value: 20 }, { id: 2, value: 30 }],
				prices: [{ id: 0, price: 19 }, { id: 1, price: 29 }, { id: 2, price: 39 }],
      },
      {
        id: 15,
        image: cheeseChedder,
        name: "Сыр Чеддер",
				maxAmount: 5,
				weights: [{ id: 0, value: 26 }, { id: 1, value: 40 }, { id: 2, value: 50 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 65 }, { id: 2, price: 75 }]
      },
      {
        id: 16,
        image: cheeseBlue,
        name: "Сыр Блю Чиз",
				maxAmount: 5,
				weights: [{ id: 0, value: 15 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 55 }, { id: 1, price: 95 }, { id: 2, price: 115 }]
      },
      {
        id: 17,
        image: pimiento,
        name: "Болгарский Перец",
				maxAmount: 5,
				weights: [{ id: 0, value: 17 }, { id: 1, value: 35 }, { id: 2, value: 53 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 35 }, { id: 2, price: 50 }]
      },
      {
        id: 18,
        image: pineapple,
        name: "Ананасы",
				maxAmount: 5,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 25 }, { id: 1, price: 45 }, { id: 2, price: 65 }]
      },
      {
        id: 19,
        image: dill,
        name: "Укроп",
				maxAmount: 1,
				weights: [{ id: 0, value: 5 }, { id: 1, value: 5 }, { id: 2, value: 5 }],
				prices: [{ id: 0, price: 15 }, { id: 1, price: 15 }, { id: 2, price: 15 }]
      },
      {
        id: 20,
        image: garlic,
        name: "Чеснок",
				maxAmount: 1,
				weights: [{ id: 0, value: 8 }, { id: 1, value: 8 }, { id: 2, value: 8 }],
				prices: [{ id: 0, price: 5 }, { id: 1, price: 5 }, { id: 2, price: 5 }]
      },
      {
        id: 21,
        image: sauce,
        name: "Ранч Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 23 }, { id: 1, value: 35 }, { id: 2, value: 55 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 22,
        image: sauce,
        name: "Горчичный Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 20 }, { id: 1, value: 30 }, { id: 2, value: 45 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
      {
        id: 23,
        image: sauce,
        name: "Кетчуп Соус на пиццу",
				maxAmount: 1,
				weights: [{ id: 0, value: 25 }, { id: 1, value: 40 }, { id: 2, value: 60 }],
				prices: [{ id: 0, price: 35 }, { id: 1, price: 45 }, { id: 2, price: 55 }]
      },
    ],
    removeIngredients: [{ id: 0, name: "Томаты" }],
    categories: [
      { key: 0, title: "Без Мяса", image: leaf },
      { key: 1, title: "Подходит для Детей", image: bear },
    ],
    sizes: [
      { id: 0, name: 23 },
      { id: 1, name: 28 },
      { id: 2, name: 33 },
    ],
    dough: [
      { id: 0, name: "Тонкое" },
      { id: 1, name: "Традиционное" },
    ],
    nutritionalValues: {
      proteins: 13.16,
      fats: 10.27,
      carbohydrates: 29.18,
      calories: 261.75,
    },
		weights: [{ id: 0, weight: 350 }, { id: 1, weight: 530 }, { id: 2, weight: 720 }, { id: 3, weight: 440 }, { id: 4, weight: 630 }]
  },
];
