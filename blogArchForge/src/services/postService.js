import apiClient from "./apiClient";

export class PostService {
 
  async createPost(postData) {
    try {
      return await apiClient.post("/posts", postData);
    } catch (error) {
     
      console.warn("Backend not yet connected. Simulating network response...");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: Date.now(),
            ...postData,
            createdAt: new Date().toISOString(),
          });
        }, 800);
      });
    }
  }

  async getAllPosts() {
    try {
      return await apiClient.get("/posts");
    } catch (error) {
      console.warn("Backend not yet connected. Returning empty list.");
      return [];
    }
  }
}

const postService = new PostService();
export default postService;