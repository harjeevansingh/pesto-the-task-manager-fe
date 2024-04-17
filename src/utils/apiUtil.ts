export const BASE_URL = `${
  import.meta.env.VITE_REACT_APP_BASEPATH_TASKMANAGER
}`;

export class ResponseError extends Error {
  status: number;
  body: unknown;

  constructor(target: string, status: number, body: unknown) {
    super(`An error occurred while trying to get ${target}.`);
    this.name = "ResponseError";
    this.status = status;
    this.body = body;
  }
}

export const formatApiPath = (path: string): string => {
  return BASE_URL + joinPaths(path);
};

// Join paths with a leading separator and without a trailing separator.
const joinPaths = (...paths: string[]): string => {
  return ["", ...paths]
    .join("/")
    .replace(/\/+$/g, "") // Remove trailing separators.
    .replace(/\/+/g, "/"); // Remove repeated separators.
};
