let leftpad = function(str: string, len: number, ch = " "): string {
  str = String(str);

  let i = -1;

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
};
export = leftpad;
