var digits;
var output = [];

var hex = {
  vals : [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
  ],
  
  conversion: function (base, number) {
    switch (base) {
      case 10:
        for (digits = 0; (Math.pow(16, digits)) <= number; digits++) {}
        
        for (i = 0; i < digits; i++) {
          for (j = 0; (j * (16 * (digits - (i + 1)))) < 1; j++) {
            
          }
          output.push(i);
        }
        break;
      case 2:
        break;
    }
    // return digits + 1;
    return String(digits) + ' <- digits || values -> ' + String(output);
  }
};
document.getElementById('output').innerHTML = hex.conversion(10, 4);
