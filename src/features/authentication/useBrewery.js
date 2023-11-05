import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBreweryById } from "../../services/apiBrewery";

export function useBrewery() {
  const { breweryId } = useParams();

  const {
    isLoading,
    data: brewery,
    error,
  } = useQuery({
    queryKey: ["brewery", breweryId],
    queryFn: () => getBreweryById(breweryId),
    retry: false,
  });

  return { isLoading, error, brewery };
}
