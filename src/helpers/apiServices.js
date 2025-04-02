import axiosClient from "../api/axiosClient";
import API_ENDPOINTS from "../api/endpoints";

const apiServices = {
  // Fetch all manga chapters
  fetchMangaChapters: async () => {
    try {
      const response = await axiosClient.get(API_ENDPOINTS.MANGA.GET_ALL);
      return response.data;
    } catch (error) {
      console.error("Error fetching manga chapters:", error);
      throw error;
    }
  },

  // Fetch single manga details
  fetchSingleManga: async (id) => {
    try {
      const response = await axiosClient.get(
        API_ENDPOINTS.MANGA.GET_SINGLE(id)
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching manga details:", error);
      throw error;
    }
  },

  // Create a new manga entry
  createManga: async (mangaData) => {
    try {
      const response = await axiosClient.post(
        API_ENDPOINTS.MANGA.CREATE,
        mangaData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating manga:", error);
      throw error;
    }
  },

  // Update manga details
  updateManga: async (id, updatedData) => {
    try {
      const response = await axiosClient.put(
        API_ENDPOINTS.MANGA.UPDATE(id),
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating manga:", error);
      throw error;
    }
  },

  // Delete a manga
  deleteManga: async (id) => {
    try {
      const response = await axiosClient.delete(API_ENDPOINTS.MANGA.DELETE(id));
      return response.data;
    } catch (error) {
      console.error("Error deleting manga:", error);
      throw error;
    }
  },
};

export default apiServices;
