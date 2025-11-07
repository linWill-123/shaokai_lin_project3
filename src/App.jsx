import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <main className="main-content">
          <Outlet />
        </main>
      </header>
    </div>
  );
}

export default App;
