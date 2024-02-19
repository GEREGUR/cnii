import { useQuery } from 'react-query';
import axios from 'axios';
import LoadingPage from '@/pages/LoadingPage';

const fetchJests = async () => {
  const response = await axios.get(`https://nslovar.cnii-jest.ru/api/jests/${response.data.map(jest => (jest.id))}`);
  return response.data; 
};

const JestsComponent = () => {
  const { data, isLoading, isError, error } = useQuery('jests', fetchJests);
  if (isLoading) return <LoadingPage />;

  if (isError) return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <div className='flex items-center justify-center text-[#C1E1FF]'>
        Error: {error.message}
        </div>
        <a href="/" className='border-2 border-black rounded-lg hover:border-2 hover:border-neutral-200 transition '>Вернуться </a>
    </div>
  );

  return (
    <div>
      <h1>Jests</h1>
      <ul>
        {data.map(jest => (
          <li key={jest.id}>{jest.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default JestsComponent;
