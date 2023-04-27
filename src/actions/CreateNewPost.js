import axios from "axios";

export default function CreateNewPost(username, title, content) {
  const LINK_API = "https://dev.codeleap.co.uk/careers/";

  const request = axios.post(LINK_API, {
    username,
    title,
    content,
  });

  request.then((response) => {
    /* window.reload(); */ //arrumar essa parte após resolver o get
    console.log(response);
  });
  request.catch((err) => {
    console.log(err.response);
  });
}
