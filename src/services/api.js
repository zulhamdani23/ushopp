import axios from "axios";
const API_URL = "http://127.0.0.1:1212/mitra";
const API_KEY = "kjdhgskjdgfnieubskniu894256520987t8hg9487";

const api = {
  getMitraList: async () => {
    const { data } = await axios.get(`${API_URL}/list`, {
        headers: {
            "api-key": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    });
    return data.data || data;
  },

  getMitraById: async (id) => {
    const { data } = await axios.get(`https://example.com/api/mitra/${id}`, );
    return data;
  },

  createMitra: async (payload) => {
    payload.tgl = payload.tglBergabung;
    const { data } = await axios.post(`${API_URL}/create`, payload, {
        headers: {
            "api-key": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    });
    return data.data || data;
  },

  updateMitra: async (payload) => {
    payload.tgl = payload.tglBergabung;
    const { data } = await axios.post(`${API_URL}/update/${id}`, payload, {
        headers: {
            "api-key": `${API_KEY}`,
            "Content-Type": "application/json",
        },
    });
    return data.data || data;
  },

  deleteMitra: async (id) => {
    const { data } = await axios.delete(`https://example.com/api/mitra/${id}`);
    return data;
  },
};

export default api;
