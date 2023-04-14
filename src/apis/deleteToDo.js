import axios from "axios";

const API_URL = "https://www.pre-onboarding-selection-task.shop";

const deleteToDo = async (id, accessToken) => {
  const response = await axios.delete(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default deleteToDo;
