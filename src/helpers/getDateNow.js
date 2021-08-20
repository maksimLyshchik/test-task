export const getDateNow = (time) => {
  const formatTime = new Date(time).toLocaleTimeString('en-GB', {hour12: false});
  const formatDate = new Date(time).toLocaleDateString('en-GB');

  return `${formatDate} ${formatTime}`;
};
