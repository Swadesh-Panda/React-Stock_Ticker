import "./assets/App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { ContactsProvider } from "./context/ContactsProvider";
import { ChatsProvider } from "./context/ChatsProvider";

function App() {
  return (
    <div className="App">
      <ContactsProvider>
        <ChatsProvider>
          <Dashboard />
        </ChatsProvider>
      </ContactsProvider>
      {/* <Login /> */}
    </div>
  );
}

export default App;
