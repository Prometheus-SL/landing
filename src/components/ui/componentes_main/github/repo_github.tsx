import axios from "axios";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../../item";
import { Button } from "../../button";
import React, { useEffect, useState } from "react";

type RepoContributor = {
  login: string;
  contributions: number;
};


type Commit = {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
};

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  commits?: Commit[];
  license: {
    name: string;
  };
};

type RepoGithubState = {
  repos: GithubRepo[];
};


export function Repo_Github_Item({ repo }: { repo: GithubRepo }) {
  const [author, setAuthor] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    axios
      .get<Commit[]>(
        `https://api.github.com/repos/Prometheus-SL/${repo.name}/commits`
      )
      .then((res) => {
        const firstCommit = res.data[0];
        if (firstCommit) {
          const fullName = firstCommit.commit.author.name.split(" ")
          const AuthorName = fullName.slice(0, 2).join(" ");
          setAuthor(AuthorName);
        }
      })
      .catch((err) => {
        console.error(`Error fetching commits for ${repo.name}:`, err);
      });
  }, [repo.name]);

  useEffect(() => {
    axios
      .get<RepoContributor[]>(
        `https://api.github.com/repos/Prometheus-SL/${repo.name}/contributors`
      )
      .then((res) => {
        const totalCommits = res.data.reduce((acc, contributor) => acc + contributor.contributions, 0);
        setCount(totalCommits);
      })
      .catch((err) => {
        console.error(`Error fetching commits for ${repo.name}:`, err);
      });
  }, [repo.name]);
  
  return (
    <div className="mb-4">
      <Item variant={"outline"}>
      <ItemContent>
        <ItemTitle className="text-lg font-semibold">{repo.name}</ItemTitle>
        <ItemDescription className="text-sm text-muted-foreground">
          Último commit: {author} / Total de contribuciones: {count} commits
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(repo.html_url, "_blank")}
        >
          Open
        </Button>
      </ItemActions>
    </Item>
  </div>
  );
}
export class Repo_Github extends React.Component<{}, RepoGithubState> {
  state: RepoGithubState = {
    repos: [],
  };

  componentDidMount() {
    axios
      .get<GithubRepo[]>("https://api.github.com/users/Prometheus-SL/repos")
      .then((response) => {
        this.setState({ repos: response.data.filter(repo => repo.name !== ".github") });
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
      });
  }

  render() {
    return (
      <div className="items-center justify-center">
        <ul>
          {this.state.repos.map((repo) => (
            <Repo_Github_Item key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    );
  }
}



export default Repo_Github;
