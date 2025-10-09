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

  useEffect(() => {
    axios
      .get<Commit[]>(
        `https://api.github.com/repos/Prometheus-SL/${repo.name}/commits`
      )
      .then((res) => {
        const firstCommit = res.data[0];
        if (firstCommit) {
          setAuthor(firstCommit.commit.author.name);
        }
      })
      .catch((err) => {
        console.error(`Error fetching commits for ${repo.name}:`, err);
      });
  }, [repo.name]);
  
  return (
    <Item variant={"outline"}>
      <ItemContent className="space-y-3">
        <ItemTitle className="text-lg font-semibold">{repo.name}</ItemTitle>
        <ItemDescription className="text-sm text-muted-foreground">
          {author}
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
