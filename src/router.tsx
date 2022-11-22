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
import SecureRoute from "./components/SecureRoute";
import HomePage from "./components/HomePage";
import Registration from "./components/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StaticLayoutContainer />}>
      <Route index element={<HomePage />} />
      <Route path="registro">
        <Route index element={<Registration />} />
        <Route path="confirmar" element={<ConfirmRegistration />} />
        <Route
          path="activar/:registrationId"
          element={<ActivateRegistration />}
        />
        <Route
          path="completar"
          element={
            <SecureRoute>
              <CompleteRegistration />
            </SecureRoute>
          }
        />
      </Route>
      <Route path="acceder" element={<LoginPage />} />

      <Route
        path="perfil"
        element={
          <SecureRoute>
            <UserHome />
          </SecureRoute>
        }
      >
        <Route
          path="muro"
          element={
            <SecureRoute>
              <HomeFeed />
            </SecureRoute>
          }
        />
        <Route
          path="ofertas"
          element={
            <SecureRoute>
              <UserOffers />
            </SecureRoute>
          }
        />
        <Route
          path="pujas"
          element={
            <SecureRoute>
              <UserBids />
            </SecureRoute>
          }
        />
      </Route>
    </Route>
  )
);

export default router;
