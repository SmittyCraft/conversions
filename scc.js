var $scc = {
  toHex: function (number) {
    return {
      from: function (base) {
        return parseInt(number, base).toString(16);
      }
    };
  },
  
  toOctal: function (number) {
    return {
      from: function (base) {
        return parseInt(number, base).toString(8);
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
