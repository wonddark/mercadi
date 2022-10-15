import { NavLink } from "react-router-dom";

function Home() {
  return (
    <h1>
      Welcome to our auction house{" "}
      <NavLink to="/user/feed">Go to your fed</NavLink>
    </h1>
  );
}

export default Home;
