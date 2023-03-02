//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const regexISBN = /^[0-9](-)?[0-9]{3}(-)?[0-9]{5}(-)?[0-9Xx]$/
  if(regexISBN.test(isbn)){   
    var acc = 0, num = 0;
    isbn
      .replace(/-/g,'')
      .split('')
      .forEach((c, i)=> { 
        num = c === 'X' ? 10 : parseInt(c);
        acc += num * (10-i) 
      });
    return acc % 11 === 0;
  }
  
  return false;
};
