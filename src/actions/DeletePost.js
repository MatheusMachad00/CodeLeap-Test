import axios from "axios";

export default function DeletePost(id) {
  const LINK_API = `https://dev.codeleap.co.uk/careers/${id}`;

  const request = axios.post(LINK_API);

  request.then((response) => {
    
    console.log(response);
  });
  request.catch((err) => {
    console.log(err.response);
  });
}
