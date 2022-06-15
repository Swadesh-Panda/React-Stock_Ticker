import "./assets/App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { ContactsProvider } from "./context/ContactsProvider";

function App() {
  return (
    <div className="App">
      <ContactsProvider>
        <Dashboard />
      </ContactsProvider>
      {/* <Login /> */}
    </div>
  );
}

export default App;
