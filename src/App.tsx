import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';

import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
      </Routes>
  </Router>
  )
}

export default App;
