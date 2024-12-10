import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const strawberries = ['/starry-sky.jpeg', '/swans.jpg', '/pears.jpg'];
const candies = [
  'the sky filled with stars',
  'swans swimming in darkness',
  'yummy pears',
];
const donuts = [
  'the sky is beautiful',
  'swan lake is a tragic ballet',
  'pears are good with ginger',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={strawberries} />
      <Caption chamomiles={candies} />
      <Description daisies={donuts} />
      <Button label="Click for Next Image" />
    </>
  );
}
