export interface DaysDateDiff {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export default function calcDateDiff(targetDate: Date): DaysDateDiff {
    const currentDate = Date.now()
    const diff = Number(targetDate) - currentDate;

    const year = Math.floor(diff / 31104000000);
    let month = Math.floor((diff / 2592000000) % 12);
    let days = Math.floor((diff / 86400000) % 30);
    const hours = Math.floor((diff / 3600000) % 24);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    month += year * 12;
    days += month * 30;

    return {
        days,
        hours,
        minutes,
        seconds
    }
}