// Original PHP Code
// function findFirstStringInBracket($str) {
//   if (strlen($str) > 0) {
//     $firstbracket = strstr($str, "(");
//     if ($firstbracket) {
//       $firstbracket = ltrim($firstbracket, "(");
//       return strstr($firstbracket, ")", true);
//     } else {
//       return "";
//     }
//   } else {
//     return "";
//   }
// }

// Refactored on JS, with regex
function findFirstStringInBracket(str) {
  if (!str || str.length == 0) {
    return "";
  }

  const matches = str.match(/(?<=\()(.*?)(?=\))/g);

  if (!matches) {
    return "";
  }

  return matches[0];
}

module.exports = {
  findFirstStringInBracket
};
