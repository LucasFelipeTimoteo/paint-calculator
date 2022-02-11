const parseCamelCaseString = (string: string) => {
  return string
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join(' ');
};

export default parseCamelCaseString