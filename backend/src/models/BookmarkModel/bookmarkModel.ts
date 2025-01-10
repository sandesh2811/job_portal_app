import mongoose, { Document, Schema, Model } from "mongoose";

interface BookmarkType extends Document {
  jobId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
}

const BookmarkSchema = new Schema<BookmarkType>({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "NewJob",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const BookmarkModel =
  (mongoose.models.Bookmarks as Model<BookmarkType>) ||
  mongoose.model("Bookmark", BookmarkSchema);

export default BookmarkModel;
