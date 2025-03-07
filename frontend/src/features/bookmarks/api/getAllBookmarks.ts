import api from "@/axios/axios";

import {
  BookmarkSchemaReturnDataSchema,
  BookmarkSchemaReturnType,
} from "@/Validators/ReturnDataTypeValidators";

import { z } from "zod";

const getBookmarks = async (
  userId: string,
): Promise<BookmarkSchemaReturnType> => {
  try {
    const fetchAllBookmarks = await api.get(`bookmarks/${userId}`);

    const { data } = fetchAllBookmarks;

    const parsedData = await BookmarkSchemaReturnDataSchema.parseAsync(data);

    return parsedData;
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
