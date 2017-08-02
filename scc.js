var $scc = {
  toHex: function (number) {
    return {
      from: function (base) {
        return parseInt(number, base).toString(16);
      }
    };
  }
};
