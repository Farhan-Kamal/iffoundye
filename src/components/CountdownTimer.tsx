import React, { useState, useEffect } from 'react';
import { formatCountdown } from '../utils/timeUtils';

export function CountdownTimer() {
  const [countdown, setCountdown] = useState(formatCountdown(new Date('2025-01-05T23:59:00-05:00')));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(formatCountdown(new Date('2025-01-05T23:59:00-05:00')));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const eventDate = new Date('2025-01-05T23:59:00-05:00');
  const localEventTime = eventDate.toLocaleString('en-US', {
    timeZone: userTimeZone,
    dateStyle: 'full',
    timeStyle: 'long'
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-4xl font-bold">{countdown.days}</div>
          <div className="text-sm text-purple-200">Days</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-4xl font-bold">{countdown.hours}</div>
          <div className="text-sm text-purple-200">Hours</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-4xl font-bold">{countdown.minutes}</div>
          <div className="text-sm text-purple-200">Minutes</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-4xl font-bold">{countdown.seconds}</div>
          <div className="text-sm text-purple-200">Seconds</div>
        </div>
      </div>
      <p className="text-center text-purple-200">
        Event happens at: {localEventTime}
      </p>
    </div>
  );
}