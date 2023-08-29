function containsNumber(password) {
    return /\d/.test(password);
  }
  
  function containsSpecialCharacter(password) {
    return (
      /[@$!\[\]\{\}\(\)%*?&^.-]/.test(password) ||
      /["#/\\,<>':;|_~`+=]/.test(password)
    );
  }
  
  function containsUppercase(password) {
    return /[A-Z]/.test(password);
  }
  
  function containsLowercase(password) {
    return /[a-z]/.test(password);
  }
  
  function isValid(password) {
    return (
      containsNumber(password) &&
      containsSpecialCharacter(password) &&
      containsUppercase(password) &&
      containsLowercase(password)
    );
  }
  export {
    containsNumber,
    containsSpecialCharacter,
    containsUppercase,
    containsLowercase,
    isValid,
  };