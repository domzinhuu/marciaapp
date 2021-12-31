import api from "./base.service";

const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post("/users/login", { username, password });

      return response.data;
    } catch (error) {}
  },
};

export default authService;
