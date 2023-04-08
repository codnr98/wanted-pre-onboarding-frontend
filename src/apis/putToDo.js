import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const API_URL = "https://www.pre-onboarding-selection-task.shop";

const putToDo = async (id, pathData) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, pathData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default putToDo;
