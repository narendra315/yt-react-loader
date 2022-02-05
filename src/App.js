import React, { useState } from 'react';
import Loader from './Loader';

function App() {
  const [showLoader, setShowLoader] = useState(false);

  const onShowLoader = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 5 * 1000)
  }

  return (
    <div className="mt-5 text-center">
      {
        showLoader && <Loader />
      }
      <button className="btn btn-primary" onClick={() => onShowLoader()}>
        Show Loader
      </button>
    </div>
  );
}

export default App;