import axios from "axios";

const BASE_URL = "http://3.39.125.17/chat";

//모집마감
export const finishData = async (postId) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  try {
    const response = await axios.post(
      BASE_URL + `?pId=${postId}`,
      {
        p_id: postId,
      },
      { headers: headers },
      { withCredentials: false }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};