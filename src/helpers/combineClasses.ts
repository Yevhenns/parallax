export const cn = (...classes: (string | boolean)[]) => {
  return classes.filter(className => className).join(' ');
};
