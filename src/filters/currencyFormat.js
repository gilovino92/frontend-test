export default function(value, locales = 'en-sg', currency = 'SGD') {
  const formatted = Number(value).toLocaleString(locales, {
    style: 'currency',
    currency,
    format: 'short'
  });
  return `S${formatted.slice(0, 1)} ${formatted.slice(1)}`;
}
