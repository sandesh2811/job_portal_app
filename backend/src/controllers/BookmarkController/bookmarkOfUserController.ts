import { RequestHandler } from "express-serve-static-core";
import mongoose from "mongoose";

import BookmarkModel from "../../models/BookmarkModel/bookmarkModel";

// Adding or removing  bookmark of a job of a user

export const addOrRemoveBookmarkOfUser: RequestHandler<
  {},
  {},
  BookmarkType
> = async (req, res, next): Promise<void> => {
  try {
    const { jobId, userId } = req.body;

    // Converting regular id string's into mongodb object id
    const convertedJobId = new mongoose.Types.ObjectId(jobId);
    const convertedUserId = new mongoose.Types.ObjectId(userId);

    if (!jobId || !userId) {
      res.status(400).json({ message: "Job id or user id missing!" });
    } else {
      // Finding the bookmark based on job id and user id.

      const getCorrectBookmarkOfUser = await BookmarkModel.findOne({
        jobId,
        userId,
      });

      // If bookmark for same job exists for same user then remove the bookmark and vice versa.

      if (getCorrectBookmarkOfUser) {
        const removeBookmark = await BookmarkModel.findByIdAndDelete(
          getCorrectBookmarkOfUser._id
        );
        res.status(200).json({
          success: true,
          message: "Removed bookmark  successfully!",
        });
      } else {
        // If no previous bookmarks are found for the job of a particular user then create a new one.

        const newBookmark = await BookmarkModel.create({
          jobId: convertedJobId,
          userId: convertedUserId,
        });

        res.status(201).json({
          success: true,
          message: "New bookmark added successfully!",
          newBookmark,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

// Getting all the bookmarks for a particular applier

export const getAllBookmarksOfUser: RequestHandler<ParamsType> = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const userId = req.params.id;

    if (!userId) {
      res.status(400).json({ success: false, message: "User id missing!" });
    } else {
      // Finding all the bookmarks for the jobs saved by the user.

      const getBookmarksOfUser = await BookmarkModel.find({ userId }).populate(
        "jobId"
      );

      const bookmarksOfUser = getBookmarksOfUser.filter(
        (bookmark) => bookmark.jobId !== null
      );

      const jobIdOfBookmarks = bookmarksOfUser.map((bookmark) => bookmark._id);

      res.status(201).json({
        success: true,
        message: "All bookmarks obtained successfully!",
        bookmarksOfUser,
        jobIdOfBookmarks,
      });
    }
  } catch (error) {
    next(error);
  }
};
