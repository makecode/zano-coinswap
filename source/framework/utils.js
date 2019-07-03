import dayjs from 'dayjs';

export const request = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      throw new Error(error);
    });

export const transformData = res => res.length ? res.map(d => ({
  date: dayjs.unix(d.bbr_hourstamp).toDate(),
  value: d.amount_in_bbr
})) : [];

export const getStartEndOfTheDay = () => {
  const start = new Date();
  start.setHours(0,0,0,0);

  const end = new Date();
  end.setHours(23,59,59,999);

  const timestampStart = new Date(start).getTime();
  const timestampEnd = new Date(end).getTime();

  return [timestampStart, timestampEnd];
};
