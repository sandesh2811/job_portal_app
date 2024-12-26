type FormData = {
  [key: string]: string;
};

type UpdatedDataType = {
  [key: string]: string;
};

const CompareForms = (initialFormData: FormData, newFormData: FormData) => {
  const updateDataAttributes: UpdatedDataType = {};

  Object.keys(initialFormData).forEach((key) => {
    if (initialFormData[key] !== newFormData[key]) {
      updateDataAttributes[key] = newFormData[key];
    }
  });
  return updateDataAttributes;
};

export default CompareForms;
