let url = "http://localhost:8080/";

export default {
    getStats: async () => {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    }
}