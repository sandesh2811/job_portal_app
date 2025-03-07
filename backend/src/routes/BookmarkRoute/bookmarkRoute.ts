import express from "express";
import {
  getAllBookmarksOfUser,
  addOrRemoveBookmarkOfUser,
} from "../../controllers/BookmarkController/bookmarkOfUserController";
import checkUserSession from "../../middleware/authMiddleware/checkSession";

const saveBookmarks = express.Router();

saveBookmarks.route("/:id").get(checkUserSession, getAllBookmarksOfUser);
saveBookmarks.route("/").post(checkUserSession, addOrRemoveBookmarkOfUser);

export default saveBookmarks;
