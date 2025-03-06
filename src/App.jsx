import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './index';

function App(){

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />                              
        
      </Routes>
    </Router>

  );

}

export default App;