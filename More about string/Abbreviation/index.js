function getAbbreviation(str) {
  let result = str.charAt(0);
    if ((str.split.lenght(" ") >= 3)) {
      result += str.split(1);
      return result;
    }
  }

getAbbreviation('some company name');
getAbbreviation('Union of Soviet Socialist Republics');
getAbbreviation('United States');
