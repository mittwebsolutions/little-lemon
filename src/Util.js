export const ROOT_URL = "/little-lemon";

export const getCurrentLocalDate = () => {
  const tzoffset = (new Date()).getTimezoneOffset() * 60000;
  return (new Date(Date.now() - tzoffset));
};