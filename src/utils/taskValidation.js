const taskDataValidation = ({ title, description, status }) => {
  return new Promise((resolve, reject) => {
    if (!title || typeof title !== "string") reject("title is required");
    if (!description || typeof description !== "string") reject("description is required");
    resolve();
    // if (!status || typeof status !== "string") reject("status is required");
  });
};

module.exports = { taskDataValidation };