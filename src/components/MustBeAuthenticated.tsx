import LoginForm from "./security/LoginForm";

function MustBeAuthenticated() {
  return (
    <div className="card card-body" style={{ position: "sticky", top: "72px" }}>
      <LoginForm />
    </div>
  );
}

export default MustBeAuthenticated;
