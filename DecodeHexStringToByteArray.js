// code from stackoverflow
var DecodeHexStringToByteArray = function (hexString) {
   var result = [];
   while (hexString.length >= 2) { 
       result.push(parseInt(hexString.substring(0, 2), 16));
       hexString = hexString.substring(2, hexString.length);
   }
   return result;
}
