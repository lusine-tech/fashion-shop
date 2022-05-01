import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{
        padding: "10px 25px",
        cursor: "pointer",
        backgroundColor: "#BC6C74",
        marginBottom: "calc(100vh - 100px)",
       
      }}
    >
      Log In
    </button>
  );
}

function LoginPage() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <LoginButton />
    </div>
  );
}
export default LoginPage;
