interface CountdownValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function formatCountdown(targetDate: Date): CountdownValues {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: String(Math.max(0, days)).padStart(2, '0'),
    hours: String(Math.max(0, hours)).padStart(2, '0'),
    minutes: String(Math.max(0, minutes)).padStart(2, '0'),
    seconds: String(Math.max(0, seconds)).padStart(2, '0')
  };
}