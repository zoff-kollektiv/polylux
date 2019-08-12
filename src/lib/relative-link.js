export default link => {
  const url = new URL(link);
  return url.pathname;
};
