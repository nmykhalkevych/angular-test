import { cameras } from '../constants/cameras';
import { images } from '../constants/images';
import { getRandomNumber } from './randomNumber';

export const generateCameras = () => {
  return [...cameras]
    .sort(() => Math.random() - 0.5)
    .splice(0, getRandomNumber(1, 9))
    .map((c) => {
      c.images = [...images]
        .sort(() => Math.random() - 0.5)
        .splice(0, getRandomNumber(1, 9));
      return c;
    });
};
