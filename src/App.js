import { Route, Routes } from 'react-router-dom';
import Entry from './pages/Entry';
import Result from './pages/Result';
import Layout from "./components/layout/Layout";

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
