import { saveAs } from "file-saver";

export default function downloadResume() {
  saveAs(
    "https://drive.google.com/file/d/1lrp9v4lH5gUGu0f1DLjO6xxt67qb8PGZ/view?usp=sharing",
    "john_resume.pdf"
  );
}

// using js-file-download
//! Not working - CORS error
//? Access to XMLHttpRequest at 'https://drive.google.com/file/d/1lrp9v4lH5gUGu0f1DLjO6xxt67qb8PGZ/view?usp=sharing'
//? from origin 'http://localhost:3000' has been blocked by CORS policy:
//? No 'Access-Control-Allow-Origin' header is present on the requested resource.
// import axios from "axios";
// import fileDownload from "js-file-download";

// export default function downloadResume(url, filename) {
//   axios
//     .get(url, {
//       responseType: "blob",
//     })
//     .then((res) => {
//       fileDownload(res.data, filename);
//     });
// }
