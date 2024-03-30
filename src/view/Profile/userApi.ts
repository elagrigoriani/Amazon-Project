import { publicAxios } from "../../utils/publicAxios";

export async function getUserData() {
  try {
    const response = await publicAxios.get("/user/current-user");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
}
