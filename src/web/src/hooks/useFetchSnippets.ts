import { AxiosResponse } from "axios";
import { Snippet } from "../global/types";
import instance from "../utils/api";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";

const fetchSnippets = async (): Promise<AxiosResponse<Snippet[], unknown>> => {
  return await instance.get<Snippet[]>("/snippets");
};

export const useFetchSnippets = (): QueryObserverResult<Snippet[], unknown> => {
  return useQuery<Snippet[], unknown>({
    queryFn: async () => {
      const { data } = await fetchSnippets();
      console.log(data);
      return data;
    },
    queryKey: ["snippets"]
  });
};
