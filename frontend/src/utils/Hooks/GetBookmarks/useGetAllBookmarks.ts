import { useQuery } from "@tanstack/react-query";

const getBookmarks = async (userId: string) => {
  try {
    const response = await fetch(`/api/bookmarks/${userId}`, {
      method: "GET",
      credentials: "include",
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

const useGetAllBookmarks = (userId: string) => {
  const { data, isLoading: bookmarksLoading } = useQuery<
    BookmarkType<JobType>[]
  >({
    queryKey: ["bookmarks"],
    queryFn: () => getBookmarks(userId),
  });
  return {
    data,
    bookmarksLoading,
  };
};

export default useGetAllBookmarks;
