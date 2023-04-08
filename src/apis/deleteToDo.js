import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const API_URL = "https://www.pre-onboarding-selection-task.shop";

const deleteToDo = async (id) => {
  const response = await axios.delete(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default deleteToDo;
