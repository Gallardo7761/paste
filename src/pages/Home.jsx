import '@/css/Home.css';
import PastePanel from '@/components/Pastes/PastePanel';
import { useConfig } from '@/hooks/useConfig';
import LoadingIcon from '@/components/LoadingIcon';
import { useDataContext } from '@/hooks/useDataContext';
import { useState } from 'react';
import { DataProvider } from '@/context/DataContext';

const Home = () => {
  const { config, configLoading } = useConfig();

  if (configLoading) return <p><LoadingIcon /></p>;

  const reqConfig = {
    baseUrl: `${config.apiConfig.baseUrl}${config.apiConfig.endpoints.pastes.all}`,
    params: {
      _sort: 'created_at',
      _order: 'desc',
    },
  };

  return (
    <DataProvider config={reqConfig}>
      <HomeContent reqConfig={reqConfig} />
    </DataProvider>
  );
};

const HomeContent = ({ reqConfig }) => {
  const { data, dataLoading, dataError, postData } = useDataContext();
  const [error, setError] = useState(null);

  if (dataLoading) return <p><LoadingIcon /></p>;
  if (dataError) return <p>Error loading data</p>;

  const handleSubmit = async (paste) => {
    try {
      await postData(reqConfig.baseUrl, paste);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <PastePanel onSubmit={handleSubmit} publicPastes={data} />
  );
}

export default Home;
