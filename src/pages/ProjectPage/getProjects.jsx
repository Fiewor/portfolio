import axios from "axios";

const url = "https://api.github.com/users/Fiewor/repos";

export default function getProjects() {
  let projects = [];
  axios.get(url).then((repos) => {
    for (let repo of repos) {
      if (repo["homepage"]) {
        let project = {
          id: repo["id"],
          name: repo["name"],
          url: repo["html_url"],
          description: repo["description"],
          topics: repo["topics"],
          images: repo["homepage"].split(";"),
        };
        projects.append(project);
      }
    }
  });
}
