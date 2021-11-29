import type { NextPage } from 'next';
import Map from '@/components/Map';

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Map />
    </div>
  );
};

export default Home;
