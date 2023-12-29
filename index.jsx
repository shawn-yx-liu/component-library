import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Pages from "./pages/index"

function App() {
  const [page, setPage] = React.useState("home");

  let displayedPage;
  switch(page) {
    case "home":
      displayedPage = <Pages.Home/>;
      break;
    case "badges":
      displayedPage = <Pages.Badges/>;
      break;
  }
  return (
    <div className="components">
      <Menu>
        <Menu.Button>Component</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item onClick={() => setPage("home")}>Home</Menu.Item>
          <Menu.Item onClick={() => setPage("badges")}>Badges</Menu.Item>
          <Menu.Item>Banners</Menu.Item>
          <Menu.Item>Cards</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {displayedPage}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
