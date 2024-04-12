export const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let token;
  if (user) {
    token = user.auth;
    if (user.role === "guest") {
      if (user.expiresAt < Date.now()) {
        localStorage.removeItem("user");
        window.location.pathname = "/";
      }
    }
    return token;
  }
};

export const cleanLocalStorage = () => {
  localStorage.removeItem("user");
  window.location.reload();
};
