import useSwr from "swr";
import { fetcher } from "@/utils/fetcher";
import { api } from "@/config/api";

/** @TODO - to be moved to right place or load it from env. file **/
const { REST_DISEASE } = api;

export const useCountries = () => {
  const { data, error, isLoading } = useSwr(
    `${REST_DISEASE}/historical/all?lastdays=all`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
