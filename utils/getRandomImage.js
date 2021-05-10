const covers = [
  '/images/coding-event.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg'
];

const randomInterval = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomCover = () => {
  const index = randomInterval(0, covers.length - 1);

  return covers[index];
};
