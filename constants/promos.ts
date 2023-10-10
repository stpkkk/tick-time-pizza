import birthday from '../public/assets/images/promos/birthday.webp';
import delivery60min from '../public/assets/images/promos/delivery-60-min.webp';
import dinner from '../public/assets/images/promos/dinner.webp';
import fourBigPizzas from '../public/assets/images/promos/four-big-pizzas.webp';
import pizzaOfTheDay from '../public/assets/images/promos/pizza-of-the-day.webp';
import pizzaThree from '../public/assets/images/promos/pizza-three.webp';
import promoMargarita from '../public/assets/images/promos/promo-margarita.webp';
import promoPepperoni from '../public/assets/images/promos/promo-pepperoni.webp';
import tickets from '../public/assets/images/promos/tickets.webp';
import { Promo } from '@/types';

export const promos: Promo[] = [
  {
    id: 0,
    title: '4 пиццы по цене 3',
    image: fourBigPizzas,
    isRedirect: true,
    description:
      'Супер акция: 4-ре любые пиццы 33 см по цене 3-Х!!! Подойдет для корпоратива на работе, Вашего дня рождения или для большой вечеринки дома. Акция действует с понедельника по четверг, кроме праздничных и предпраздничных дней! В акции не участвует пицца "4 сыра".',
  },
  {
    id: 1,
    title: 'Тикеты',
    image: tickets,
    isRedirect: false,
    description:
      'Начисление происходит только после оплаты заказа; Воспользоваться Тикетами можно только при заказе с сайта или нашего приложения; Чтобы оформить доставку, часть заказа оплаченная денежными средствами, должна быть не менее 545 рублей; вторая часть оплаченная бонусами может быть любого размера; При самовывозе Вы можете оплатить часть заказа, либо весь заказ полностью Тикетами',
  },
  {
    id: 2,
    title: 'Пицца дня.',
    image: pizzaOfTheDay,
    isRedirect: true,
    description:
      'Каждый день одна из наших пицц со скидкой 100 рублей! Обращаем ваше внимание, пицца дня меняется каждый день в 01:00..',
  },
  {
    id: 3,
    title: 'Пицца на обед',
    image: dinner,
    isRedirect: true,
    description: '',
  },
  {
    id: 4,
    title: '60 минут или пицца бесплатно!',
    image: delivery60min,
    isRedirect: false,
    description:
      '60 минут или пицца бесплатно! Мы гарантируем доставку не более чем за 60 минут с момента приема заказа. Если Мы опоздали, Вы получите в подарок маленькую пиццу на выбор - Пепперони, Карбонара, Деревенская, Ранч, Сырная. Акция действует в день оформления заказа. Акция действует в часы работы всех пиццерий, при осуществлении доставки в ночное время, акция не действует. Акция не распространяется на предзаказы. Акция не работает в праздничные и предпраздничные дни и в период проведения акции “Бешеный Четверг”. Точкой отсчета считается время получения смс или Push-уведомления или время на чеке c номером Вашего заказа и нашим логотипом. Промокод на бесплатную пиццу действителен 30 календарных дней с момента выдачи. За один заказ может быть выдан только один промокод. Если время ожидания заказа изначально установлено более 60 минут, в связи с высокой нагрузкой, акция работает при опоздании доставки на указное время. Подробности по телефону 33-02-04.',
  },
  {
    id: 5,
    title: 'Подарок в День Рождения',
    image: birthday,
    isRedirect: false,
    description:
      'Празднуйте День Рождения вместе с "Тик Тайм", получите пиццу при заказе в день рождения и три дня после по промокоду "МойДР"! Подарок предоставляется именинникам в День Рождения как на самовывоз, так и на доставку при заказе от 1500 р. (без учета акционного товара). Акция действует только при заказе с личного кабинета на нашем сайте или в приложении при установленной дате рождения. Для получения пиццы по акции введите промокод в специально отведенную графу. Подарок предоставляется единоразово. В акции участвуют пиццы 23см. Карбонара, деревенская, ранч, пепперони, сырная.',
  },
  {
    id: 6,
    title: 'Маргарита всегда со скидкой!',
    image: promoMargarita,
    isRedirect: true,
    description:
      'Каждый день, с утра до вечера скидка на все размеры пиццы "Маргарита" - 100 рублей!',
  },
  {
    id: 7,
    title: 'Три пиццы за 999 рублей',
    image: pizzaThree,
    isRedirect: true,
    description:
      'Три любые пиццы размером 23 см ВСЕГО за 999р! В акции не участвуют пиццы «4 сыра» и «4 сезона»',
  },
  {
    id: 8,
    title: 'Для любителей Пепперони',
    image: promoPepperoni,
    isRedirect: true,
    description:
      'Две БОЛЬШИЕ ПЕППЕРОНИ на большую компанию всего за 1299 р! Акция действует постоянно! Традиционное или тонкое тесто, на ваш выбор.',
  },
];
