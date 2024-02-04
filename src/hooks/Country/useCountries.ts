import useSwr from "swr";
import { fetcher } from "@/utils/fetcher";
import { api } from "@/config/api";

/** @TODO - to be moved to right place or load it from env. file **/
const { REST_COUNTRIES } = api;

export const useCountries = () => {
  const { data, error, isLoading } = useSwr(
    `${REST_COUNTRIES}/all?fields=name,flags,capital,currencies,languages,borders,timezones,capitalInfo`,
    fetcher
  );

  return {
    countries: data,
    error,
    isLoading,
  };
};
