import { useState } from 'react';
import './App.css';
import FromOne from './components/Form/FromOne';
import FromThree from './components/Form/FromThree';
import FromTwo from './components/Form/FromTwo';

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <div>
        {
          page === 1 ? <FromOne></FromOne> : page === 2 ? <FromTwo></FromTwo> : <FromThree></FromThree>
        }

      </div>
      <div className='mt-5 text-center'>
        {
          page > 1 && <button onClick={() => {
            const nextPage = page - 1;
            setPage(nextPage);
          }}
            type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-4 px-6 rounded-full mr-2'>Back</button>
        }
        {
          page < 3 && <>
            <button onClick={() => {
              const nextPage = page + 1;
              setPage(nextPage);
            }}
              type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-4 px-6 rounded-full'>Next</button>
          </>
        }
        {
          page === 3 && <>
            <button onClick={() => {
              const nextPage = page + 1;
              setPage(nextPage);
            }}
              type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-4 px-6 rounded-full'>Submit</button>
          </>
        }


      </div>
    </div>
  );
}

export default App;
