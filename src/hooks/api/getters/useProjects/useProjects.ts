import useSWR, { mutate, SWRConfiguration } from "swr";
import { useState, useEffect } from "react";
// import { formatApiPath } from 'utils/apiUtil';
import handleErrorResponses from "../httpErrorResponseHandler";
import { IProjectCard } from "interfaces/project";
import { formatApiPath } from "utils/apiUtil";

// import { IProjectCard } from 'interfaces/project';

const useProjects = (options: SWRConfiguration = {}) => {
  const fetcher = () => {
    const path = formatApiPath(`projects/list`);
    return fetch(path, {
      method: "GET",
    })
      .then(handleErrorResponses("Teams"))
      .then((res) => res.json());
  };

  const KEY = `projects/list`;

  const { data, error } = useSWR<{ data: IProjectCard[] }>(
    KEY,
    fetcher,
    options
  );
  const [loading, setLoading] = useState(!error && !data);

  const refetch = () => {
    mutate(KEY);
  };

  useEffect(() => {
    setLoading(!error && !data);
  }, [data, error]);

  return {
    projects: data?.data || [],
    error,
    loading,
    refetch,
  };
};

export default useProjects;
