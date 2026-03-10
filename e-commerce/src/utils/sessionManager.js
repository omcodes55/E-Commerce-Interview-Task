export const createSession = (email) => {
  const session = {
    user: email,
    expiry: Date.now() + 5 * 60 * 1000
  };

  localStorage.setItem("session", JSON.stringify(session));
};

export const getSession = () => {
  return JSON.parse(localStorage.getItem("session"));
};

export const clearSession = () => {
  localStorage.removeItem("session");
};