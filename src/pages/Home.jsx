import '@/css/Home.css';
import PastePanel from '@/components/Pastes/PastePanel';

const Home = () => {
  return (
    <PastePanel onSubmit={(paste) => console.log("Nueva paste:", paste)} />
  );
};

export default Home;
