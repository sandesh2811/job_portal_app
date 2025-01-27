import express from "express";
import {
  getAllBookmarksOfUser,
  addOrRemoveBookmarkOfUser,
} from "../../controllers/BookmarkController/bookmarkOfUserController";

const saveBookmarks = express.Router();

saveBookmarks.get("/:id", getAllBookmarksOfUser);
saveBookmarks.post("/", addOrRemoveBookmarkOfUser);

export default saveBookmarks;
