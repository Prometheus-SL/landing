import { useEffect, useState } from "react";

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

export type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  location: string | null;
  company: string | null;
};

type CacheEntry<T> = { value: T; expiresAt: number };

const CACHE_TTL_MS = 10 * 60 * 1000;

function readCache<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (Date.now() > entry.expiresAt) {
      sessionStorage.removeItem(key);
      return null;
    }
    return entry.value;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, value: T) {
  try {
    const entry: CacheEntry<T> = { value, expiresAt: Date.now() + CACHE_TTL_MS };
    sessionStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // sessionStorage unavailable or full — fall back to no cache
  }
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) {
    throw new Error(`GitHub API error ${response.status} for ${url}`);
  }
  return response.json() as Promise<T>;
}

export function useGithubRepos(org: string) {
  const [data, setData] = useState<GithubRepo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const cacheKey = `gh:repos:${org}`;

    const cached = readCache<GithubRepo[]>(cacheKey);
    if (cached) {
      setData(cached);
      setLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setLoading(true);
    setError(null);
    fetchJson<GithubRepo[]>(
      `https://api.github.com/users/${org}/repos?per_page=100&sort=updated`,
    )
      .then((repos) => {
        if (cancelled) return;
        writeCache(cacheKey, repos);
        setData(repos);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [org]);

  return { data, loading, error };
}

export function useGithubUser(username: string | null) {
  const [data, setData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(username !== null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    const cacheKey = `gh:user:${username}`;

    const cached = readCache<GithubUser>(cacheKey);
    if (cached) {
      setData(cached);
      setLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setLoading(true);
    setError(null);
    fetchJson<GithubUser>(`https://api.github.com/users/${username}`)
      .then((user) => {
        if (cancelled) return;
        writeCache(cacheKey, user);
        setData(user);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { data, loading, error };
}
