import "./assets/App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { ContactsProvider } from "./context/ContactsProvider";
import { ChatsProvider } from "./context/ChatsProvider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ContactsProvider>
              <ChatsProvider>
                <Dashboard />
              </ChatsProvider>
            </ContactsProvider>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
