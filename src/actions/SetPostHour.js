export default function SetPostHour(timestamp) {
  const startTime = new Date(timestamp).getTime();
  const currentTime = Date.now();
  const elapsedTimeMs = currentTime - startTime;
  const elapsedTimeMin = Math.floor(elapsedTimeMs / (1000 * 60));
  const elapsedTimeHr = Math.floor(elapsedTimeMs / (1000 * 60 * 60));
  const elapsedTimeDays = Math.floor(elapsedTimeMs / (1000 * 60 * 60 * 24));
  const elapsedTimeMonths = Math.floor(elapsedTimeMs / (1000 * 60 * 60 * 24 * 30));

  if (elapsedTimeMonths > 0) {
    return `${elapsedTimeMonths} month${elapsedTimeMonths === 1 ? '' : 's'} ago`;
  } else if (elapsedTimeDays > 0) {
    return `${elapsedTimeDays} day${elapsedTimeDays === 1 ? '' : 's'} ago`;
  } else if (elapsedTimeHr > 0) {
    return `${elapsedTimeHr} hour${elapsedTimeHr === 1 ? '' : 's'} ago`;
  } else {
    return `${elapsedTimeMin} minute${elapsedTimeMin === 1 ? '' : 's'} ago`;
  }
}
