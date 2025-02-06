"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type BookmarkStatusProps = {
  bookmarkStatus: string;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const BookmarkStatusContext = createContext<BookmarkStatusProps | null>(null);

export const BookmarkStatusProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bookmarkStatus, setBookmarkStatus] = useState<string>("");

  return (
    <BookmarkStatusContext.Provider
      value={{
        bookmarkStatus,
        setBookmarkStatus,
      }}
    >
      {children}
    </BookmarkStatusContext.Provider>
  );
};

export const useBookmarkStatusContext = () => {
  const context = useContext(BookmarkStatusContext);
  if (!BookmarkStatusContext) {
    throw new Error("Context must be used within a state provider");
  }

  const { bookmarkStatus, setBookmarkStatus } = context as BookmarkStatusProps;

  return { bookmarkStatus, setBookmarkStatus };
};
