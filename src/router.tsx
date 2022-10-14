import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import Home from "./components/Home";
import UserHome from "./components/UserHome";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="user" element={<UserHome />}>
        <Route path="feed" element={<HomeFeed />} />
      </Route>
    </Route>
  )
);

export default router;
