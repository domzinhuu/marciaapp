export const saveSession = (data) => {
  localStorage.setItem("completeName", data.completeName);
  localStorage.setItem("userId", data.id);
  localStorage.setItem("token", data.accessToken);
};

export const logoutSession = () => {
  localStorage.removeItem("completeName");
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
};

export const getCompleteName = () => {
  const completeName = localStorage.getItem("completeName");
  return completeName;
};

export const getUserId = () => {
  const id = localStorage.getItem("userId");
  return id;
};

export const getBearerToken = () => {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
};

export const isRemember = () => {
  const rememberMe = localStorage.getItem("hasRemember");
  return rememberMe && rememberMe === "true" ? true : false;
};

export const setRememberMe = (hasRemember, username, password) => {
  localStorage.setItem("hasRemember", hasRemember);
  if (hasRemember) {
    localStorage.setItem("rememberMe", JSON.stringify({ username, password }));
  } else {
    localStorage.removeItem("rememberMe");
  }
};

export const getRememberMe = () => {
  const rememberData = JSON.parse(localStorage.getItem("rememberMe"));
  return rememberData;
};

export const isLogged = () => {
  const token = localStorage.getItem("token");

  return token ? true : false;
};
