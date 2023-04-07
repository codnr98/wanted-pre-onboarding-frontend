import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const API_URL = "https://www.pre-onboarding-selection-task.shop";

const getToDoList = async () => {
  const response = await axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default getToDoList;
