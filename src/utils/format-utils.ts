export function formatPercent(value: number | null | undefined): string {
  if (!value) {
    return '0%';
  }

  const originalPercent = value * 100;
  const units = ['', 'k', 'M', 'B', 'T', 'Q', 'S'];
  const order = Math.floor(Math.log10(originalPercent) / 3);
  let unitToDisplay = '';
  let magnitudePercent = originalPercent;

  if (order >= units.length - 1) return `🔥`;

  if (order > 1) {
    magnitudePercent = originalPercent / 1000 ** order;
    unitToDisplay = units[order];
  }

  // Format output
  return magnitudePercent < 999
    ? `${magnitudePercent.toFixed(2)}${unitToDisplay}%`
    : originalPercent.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }) + '%';
}

export function formatUsd(value: number, decimals = 2) {
  if (!value) {
    return '$0.00';
  }

  const units = ['', 'k', 'M', 'B', 'T', 'Q', 'S'];
  const order = Math.floor(Math.log10(value) / 3);
  let unitToDisplay = '';
  let magnitudeValue = value;

  if (order > 1) {
    magnitudeValue = value / 1000 ** order;
    unitToDisplay = units[order];

    if (order >= units.length - 1) {
      unitToDisplay = `🔥`;
    }
  }

  // Format output
  return magnitudeValue < 999
    ? `$${magnitudeValue.toFixed(decimals)}${unitToDisplay}`
    : value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
}
