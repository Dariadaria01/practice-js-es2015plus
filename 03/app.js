import { files } from './data.js';

const unitMultipliers = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
};

const getBytes = (length, unit = 'B') => {
  const multiplier = unitMultipliers[unit];
  return length * multiplier;
};

const getFileSizeInBytes = ({ size: { length, unit = 'B' } }) => {
  return getBytes(length, unit);
};

const getTotalSizeInBytes = (files) => {
  return files.reduce((total, file) => {
    return total + getFileSizeInBytes(file);
  }, 0);
};

const totalSize = getTotalSizeInBytes(files);
console.log(`Suma wszystkich plików: ${totalSize} bajtów`);
