import {
  BookmarkSchemaReturnDataSchema,
  BookmarkSchemaReturnType,
} from "@/Validators/ReturnDataTypeValidators";
import { z } from "zod";

const getBookmarks = async (
  userId: string
): Promise<BookmarkSchemaReturnType> => {
  try {
    const response = await fetch(`/api/bookmarks/${userId}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    const responseData = await BookmarkSchemaReturnDataSchema.parseAsync(data);

    return responseData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.errors);

      throw new Error(`Data validation failed`);
    } else {
      throw new Error("Failed to fetch job applications!");
    }
  }
};

export default getBookmarks;
