import express from "express";
import {
  deleteBookmarkOfUser,
  getAllBookmarksOfUser,
  addOrRemoveBookmarkOfUser,
} from "../../controllers/BookmarkController/bookmarkOfUserController";

const saveBookmarks = express.Router();

saveBookmarks.get("/:id", getAllBookmarksOfUser);
saveBookmarks.post("/", addOrRemoveBookmarkOfUser);
saveBookmarks.delete("/", deleteBookmarkOfUser);

export default saveBookmarks;
