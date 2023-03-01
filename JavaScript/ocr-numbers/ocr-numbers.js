//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUM_CHAR_BY_NUMBER = 3;
const NUM_LINES_BY_NUMBER = 4;

export const convert = (text) => {
  const lines = text.split('\n');

  var result = ''
  for ( let j = 0 ; j < lines.length ; j += NUM_LINES_BY_NUMBER ){
    if(j >= 1){
      result += ','
    }
    var line0 = lines[j];
    var line1 = lines[j+1];
    var line2 = lines[j+2];
    for ( let i = 0 ; i < line0.length ; i += NUM_CHAR_BY_NUMBER ){
      result += identifyNumber(
        line0.slice(i, i+NUM_CHAR_BY_NUMBER),
        line1.slice(i, i+NUM_CHAR_BY_NUMBER), 
        line2.slice(i, i+NUM_CHAR_BY_NUMBER)
      );
    }
  }

  return result;
} 


function identifyNumber(line0, line1, line2) {
  if(line0[1] === '_'){
    if(line1[0] === '|'){
      // 56890
      if(line1[2] === '|'){
        // 890
        if(line1[1] === '_'){
          if(line2[0] === '|'){
            return '8'
          }else{
            return '9'
          }
        }else{
          if(line2[0] === '|'){
            return '0'
          }
        }
      }else{
        if(line2[0] === '|'){
          return '6'
        }else{
          return '5'
        }
      }
    }else{
      // 237
      if(line2[0] === '|'){
        return '2'
      }else{ 
        if(line2[1] === '_') {
          return '3'
        }
        else {
          return '7'
        }
      }
    }
  }else{
    // not have -  in line 0, should be nothing in line2[0] 
    if(line2[0] === ' '){
      if(line1[0] === '|' && line1[1] === '_') 
        return '4'
      
      if(line1[2] === '|'  && line2[2] === '|')
        return '1'
    }
  }

  return '?'
}