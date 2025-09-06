import { z } from 'astro/zod';
import { format, getWeekOfMonth } from 'date-fns';

const dateSchema = z.coerce.date();

type getWeekArguments = z.infer<typeof dateSchema>;

function getWeek(date: getWeekArguments) {
  const weekFull = `${format(date, 'yyyy 年 MM 月')}第 ${getWeekOfMonth(date)} 週`;

  return weekFull;
}

export default getWeek;
