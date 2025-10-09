import axios from "axios";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../../item";
import { Button } from "../../button";
import React from "react";

// Tipo de repositorio de GitHub
type GithubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
  };
};

export class Repo_Github extends React.Component {
  state = {
    repos: [],
  };

  componentDidMount() {
    // Obtenemos todos los repos de GitHub del usuario
    axios
      .get<GithubRepo[]>("https://api.github.com/users/Prometheus-SL/repos")
      .then((response) => {
        this.setState({ repos: response.data });
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
            <>
            <Repo_Github_Item key={repo.id} repo={repo} />
            </>
          ))}
        </ul>
      </div>
    );
  }
}

// Componente que muestra un repo individual
export function Repo_Github_Item({ repo }: { repo: GithubRepo }) {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>{repo.name}</ItemTitle>
        <ItemDescription>
          {repo.license.name}
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

export default Repo_Github;
