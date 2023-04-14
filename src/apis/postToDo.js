import axios from "axios";

const API_URL = "https://www.pre-onboarding-selection-task.shop";

const postToDo = async (pathData, accessToken) => {
  const response = await axios.post(`${API_URL}/todos`, pathData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default postToDo;
