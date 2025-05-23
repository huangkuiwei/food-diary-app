// 获取最近一周 周一到周日 的日期信息
export function getRecentWeekDates() {
  const today = new Date();
  const weekStart = new Date(today);

  weekStart.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));

  const daysOfWeek = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(weekStart);
    currentDate.setDate(weekStart.getDate() + i);

    const day = String(currentDate.getDate()).padStart(2, '0');

    weekDates.push({
      day: daysOfWeek[i],
      date: `${day}`,
      numberDay: currentDate.getDay(),
    });
  }

  return weekDates;
}
