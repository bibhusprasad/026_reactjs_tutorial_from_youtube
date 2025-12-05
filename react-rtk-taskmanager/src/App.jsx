import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Task Manager</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of your application content */}
    </div>
  );
}

export default App;
