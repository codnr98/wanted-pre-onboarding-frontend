import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const API_URL = "https://www.pre-onboarding-selection-task.shop";

const postToDo = async (pathData) => {
  await axios.post(`${API_URL}/todos`, pathData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export default postToDo;
