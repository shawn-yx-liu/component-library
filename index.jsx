import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"

function App() {
  return (
    <div>
      <Star />
      <br/>
      <Menu>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Tennis</Menu.Item>
          <Menu.Item>Baseball</Menu.Item>
          <Menu.Item>Volleyball</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
