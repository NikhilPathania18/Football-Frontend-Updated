const decorateName = (inputString) => {
    if (!inputString) return;
    const words = inputString.split(" ");
  
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    const resultString = capitalizedWords.join(" ");
  
    return resultString;
  };

  export default decorateName