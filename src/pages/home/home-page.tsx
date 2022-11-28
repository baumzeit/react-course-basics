import {
  ButtonCounter,
  ButtonCounterProps,
} from '../../common/components/button-counter';
import { Layout } from '../../common/components/layout';

const foodItems: ButtonCounterProps[] = [
  { label: 'eggs' },
  { label: 'slices of bread' },
  { label: 'milk' },
  { label: 'orange juice' },
  { label: 'ham' },
  { label: 'tomatoes' },
  { label: 'cheese' },
];

export const HomePage = () => {
  return (
    <Layout>
      {foodItems.map((food) => (
        <ButtonCounter label={food.label} />
      ))}
    </Layout>
  );
};
