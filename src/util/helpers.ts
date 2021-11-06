export const isDateGreater = (date1: Date, date2: Date): boolean =>
  date1.getTime() < date2.getTime()
