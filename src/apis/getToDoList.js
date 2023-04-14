import axios from "axios";

const API_URL = "https://www.pre-onboarding-selection-task.shop";

const getToDoList = async (accessToken) => {
  const response = await axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default getToDoList;
