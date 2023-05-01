import axios from "axios";

export default function EditPost(id, title, content) {
  const LINK_API = `https://dev.codeleap.co.uk/careers/${id}/`;

  axios
    .patch(LINK_API, {
      title,
      content,
    })
    .then((res) => {
      window.location.reload();
    });
}
