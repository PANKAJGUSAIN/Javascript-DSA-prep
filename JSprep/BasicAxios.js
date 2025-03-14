import axios from "axios";

async function postDataAxios() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  
  const requestBody = {
    title: "Hello World",
    body: "This is a test post.",
    userId: 1
  };

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer my-token"
  };

  try {
    const response = await axios.post(url, requestBody, { headers });
    console.log("Axios Response:", response.data);
  } catch (error) {
    console.error("Axios Error:", error.response ? error.response.data : error.message);
  }
}

postDataAxios();
