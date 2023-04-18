function isWithin10Seconds(datetime1, datetime2) {
  const diff = Math.abs(datetime1.getTime() - datetime2.getTime());
  return diff <= 10000; // 10000 milliseconds = 10 seconds
}

export default isWithin10Seconds;
