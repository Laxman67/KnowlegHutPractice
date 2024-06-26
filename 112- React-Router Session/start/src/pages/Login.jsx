import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useAuth } from "../utils/authService";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      navigate("/projects");
    }
  }, []);
  const handleSubmit = async (event) => {
    await event.preventDefault();
    login(username, password);
    // Do login here
    setUsername("");
    setPassword("");
  };

  return (
    <Layout>
      <div className="login">
        <h1>Login to Project Master</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
