import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Greetings from '../components/Greetings';
import Counter_blok from '../components/Counter_blok';
import Reasons from '../components/Reasons';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Greetings />
      <Counter_blok />
      <Reasons />
    </>
  );
}