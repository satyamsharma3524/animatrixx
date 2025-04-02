const API_ENDPOINTS = {
  MANGA: {
    GET_ALL: "/manga/10/chapters/",
    GET_SINGLE: (id) => `/manga/${id}/chapters/`,
    CREATE: "/manga/create",
    UPDATE: (id) => `/manga/update/${id}`,
    DELETE: (id) => `/manga/delete/${id}`,
  },
};

export default API_ENDPOINTS;
