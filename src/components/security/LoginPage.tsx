import { pageTitle } from "../../helpers/page-title.helper";
import LoginForm from "./LoginForm";

function LoginPage() {
  pageTitle("Acceder");
  return (
    <div className="container col-xl-10 col-xxl-8 px-4">
      <div className="row align-items-center py-3">
        <div className="col-md-10 mx-auto col-lg-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
