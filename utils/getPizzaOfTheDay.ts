export const getPizzaOfTheDay = () => {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  const pizzas = [
    'Пицца Охотничья',
    'Пицца Карбонара',
    'Пицца Запечённая Буженина',
    'Пицца Пепперони',
    'Пицца Курица и Колбаски',
    'Пицца Сырная',
    'Пицца Жгучая Барбекю',
  ];

  const d = new Date();
  const currentHour = d.getHours();
  const dayOfWeek = d.getDay();
  let dayIndex = dayOfWeek;
  let pizzaIndex = dayOfWeek;

  if (currentHour < 1) {
    dayIndex = (dayOfWeek + 6) % 7;
    pizzaIndex = dayIndex;
  }

  return {
    dayOfWeek: days[dayIndex],
    pizzaOfTheDay: pizzas[pizzaIndex],
    dayIndex,
  };
};
