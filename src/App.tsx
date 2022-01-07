import React from 'react';

import Posts from './components/Posts/Posts'


function App() {
  return (
    <div className="App container ">
      <h1 className='display-1 text-center'>Spacestagram</h1>
      <h1 className='blockquote-footer  p-4 text-center'><em>Brought to you by NASA's APOD API</em></h1>
      <Posts />
    </div>
  );
}

export default App;
