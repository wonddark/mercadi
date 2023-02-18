import RegistrationForm from "./RegistrationForm";
import usePageTitle from "../../hooks/page-title.hook";

function Registration() {
  usePageTitle({ name: "Registro" });
  return (
    <div className="container col-xl-10 col-xxl-8 px-2 px-md-4">
      <div className="row align-items-center py-3">
        <div className="col-md-10 mx-auto col-lg-5">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Registration;
