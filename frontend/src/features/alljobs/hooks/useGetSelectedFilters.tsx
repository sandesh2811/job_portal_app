import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";

const useGetSelectedFilters = () => {
  const { selectedFilters } = useSelector(
    (state: RootState) => state.selectedFilters
  );

  return selectedFilters;
};

export default useGetSelectedFilters;
