export function getFormattedDateTime() {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  const currentHour = currentDate.getHours().toString().padStart(2, '0');
  const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${currentHour}:${currentMinute}`;

  return {
    formattedDate,
    formattedTime,
    day,
    month,
    currentHour,
    currentMinute,
  };
}
