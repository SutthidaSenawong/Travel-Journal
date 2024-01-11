import React from 'react';
import Nav from './Nav';
import Main from './main';
import Data from './Data';
function App() {
  const travelData = Data.map((item) => {
    return <Main key={item.id} {...item} />;
  });
  return (
    <div className="app-container">
      <Nav />
      {travelData}
    </div>
  );
}

export default App;
