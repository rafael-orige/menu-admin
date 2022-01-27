let url = "https://rafael-orige-admin-api.herokuapp.com";

export default {
  getStats: async () => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  },
};
