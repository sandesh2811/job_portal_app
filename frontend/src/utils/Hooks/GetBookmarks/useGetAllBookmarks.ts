import { useEffect, useState } from "react";

const useGetAllBookmarks = (userId: string) => {
  const [bookmarks, setBookmarks] = useState<BookmarkType<JobType>[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getBookmarks = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/bookmarks/${userId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const responseData = await response.json();

      if (responseData.success) {
        setBookmarks(responseData.bookmarksOfUser);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return {
    loading,
    bookmarks,
  };
};

export default useGetAllBookmarks;
