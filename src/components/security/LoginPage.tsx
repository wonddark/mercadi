import LoginForm from "./LoginForm";
import usePageTitle from "../../hooks/page-title.hook";

function LoginPage() {
  usePageTitle({ name: "Acceder" });
  return (
    <div className="container col-xl-10 col-xxl-8 px-2 px-md-4">
      <div className="row align-items-center py-3">
        <div className="col-md-10 mx-auto col-lg-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
