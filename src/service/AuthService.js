import axios from "./axios";
const AuthService = {
  register(name, email, password, avatar) {
    axios.post("https://api.escuelajs.co/api/v1/users", {
      name,
      email,
      password,
      avatar,
    });
  },
  login(loginEmail, loginPassword) {
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        loginEmail,
        loginPassword,
      })
      .then((res) => {
        console.log(res);
      });
  },
};
export default AuthService;
