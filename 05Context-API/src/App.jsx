import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-green-700 text-center-">React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
