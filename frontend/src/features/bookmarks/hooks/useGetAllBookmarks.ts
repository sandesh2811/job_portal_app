import { useQuery } from "@tanstack/react-query";
import getBookmarks from "@/features/bookmarks/api/getAllBookmarks";

const useGetAllBookmarks = (userId: string) => {
  const { data, isLoading: bookmarksLoading } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: () => getBookmarks(userId),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  return {
    data,
    bookmarksLoading,
  };
};

export default useGetAllBookmarks;
