import React from 'react';

import EntryListPage from './components/pages/entryList';

const App: React.FC = () => {
  return (
    <div className="App">
      <EntryListPage id={1} />
    </div>
  );
};

export default App;
