import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const authState = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!authState && <Auth />}
      {authState && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

//Installing redux in react app: npm install redux react-redux
