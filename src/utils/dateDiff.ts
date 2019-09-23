export interface DaysDateDiff {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function calcDateDiff(targetDate: Date): DaysDateDiff {
  const currentDate = Date.now();
  const diff = Number(targetDate) - currentDate;

  let days = Math.floor((diff / 86400000) % 30);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

export const pastDate = (target: Date): boolean => {
  return Date.now() >= target.valueOf();
};

export const itsHappening = (target: Date, finished: Date): boolean => {
  return Date.now() >= target.valueOf() && Date.now() <= finished.valueOf();
};
