import { RequestHandler } from "express";

const GetCvNameOfApplicants: RequestHandler = async (
  req,
  res
): Promise<any> => {
  const fileName = req.params.filename;

  try {
    res
      .status(200)
      .json({ success: true, message: "Required Cv file name", fileName });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error ", error });
  }
};

export default GetCvNameOfApplicants;
