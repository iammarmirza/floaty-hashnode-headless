export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toDateString();
  return date;
};
