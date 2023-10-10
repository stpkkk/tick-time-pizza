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
  let pizzaIndex = dayOfWeek % pizzas.length;

  if (currentHour < 1) {
    // Если текущее время меньше 1:00 ночи, используем пиццу предыдущего дня
    if (dayOfWeek === 0) {
      pizzaIndex = pizzas.length - 1;
    } else {
      pizzaIndex = (dayOfWeek - 1) % pizzas.length;
    }
  }

  return {
    dayOfWeek: days[dayOfWeek],
    pizzaOfTheDay: pizzas[pizzaIndex],
  };
};
