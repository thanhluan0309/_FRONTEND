export const ConvertTimeTamp = (timestamp) => {
  // Timestamp

  // Chuyển đổi timestamp thành đối tượng Date
  const date = new Date(timestamp * 1000); // Nhân với 1000 để chuyển đổi sang milliseconds

  // Định dạng ngày tháng
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  return formattedDate;
};
