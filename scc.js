// Compatible with bases 3-36. Bases 0, 1, and 2, do not work.
var $scc = {
  toHex: function (number) {
    return {
      from: function (base) {
        return parseInt(number, base).toString(16);
      }
    };
  },
  
  convert: function (number) {
    return {
      from: function (startBase) {
        return {
          to: function (endBase) {
            return parseInt(number, startBase).toString(endBase);
          }
        };
      }
    };
  }
};
