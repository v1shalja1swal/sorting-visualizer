import React from 'react';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SortBuilder from './Containers/SortBuilder/SortBuilder';

const App=()=>{
  return (
    <div >
      <>
        <ToastContainer  
          position="top-center" 
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover
          draggable={false}
          />
      </>
        <SortBuilder/>
    </div>
      
  )
}

export default App;
