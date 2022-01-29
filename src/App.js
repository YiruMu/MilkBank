import { Route, Routes } from 'react-router-dom';
import Entry from './pages/Entry';
import Result from './pages/Result';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={ <Entry />}/>
          <Route path='/result' element ={<Result />}/>
        </Routes>

      </Layout>

  );
}

export default App;
