import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeFeed from "./components/HomeFeed";
import UserHome from "./components/UserHome";
import UserOffers from "./components/UserOffers";
import UserBids from "./components/UserBids";
import ConfirmRegistration from "./components/ConfirmRegistration";
import StaticLayoutContainer from "./components/StaticLayoutContainer";
import ActivateRegistration from "./components/ActivateRegistration";
import LoginPage from "./components/LoginPage";
import CompleteRegistration from "./components/CompleteRegistration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<StaticLayoutContainer />} />
      <Route path="registration">
        <Route path="confirm" element={<ConfirmRegistration />} />
        <Route
          path="activate/:registrationId"
          element={<ActivateRegistration />}
        />
        <Route path="complete" element={<CompleteRegistration />} />
      </Route>
      <Route path="acceder" element={<LoginPage />} />

      <Route path="user" element={<UserHome />}>
        <Route path="feed" element={<HomeFeed />} />
        <Route path="offers" element={<UserOffers />} />
        <Route path="bids" element={<UserBids />} />
      </Route>
    </Route>
  )
);

export default router;
