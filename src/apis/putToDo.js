import axios from "axios";

const API_URL = "https://www.pre-onboarding-selection-task.shop";

const putToDo = async (id, pathData, accessToken) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, pathData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default putToDo;
