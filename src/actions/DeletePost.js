import axios from "axios";

export default function DeletePost(id) {
  const LINK_API = `https://dev.codeleap.co.uk/careers/${id}/`;
  console.log(LINK_API)
  axios.delete(LINK_API).then((res) => {
    window.location.reload();
  });
}
