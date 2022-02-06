
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (arguments.length === 0) return result;

  matrix.forEach((element, index) => {
      if(!!(index % 2) && index != 0)
      {
          element.slice().reverse().forEach(innerElement => {
              result.push(innerElement)
          })
      }
      else
      {
          element.forEach(innerElement => {
              result.push(innerElement)
          })
      }
  })
  
  return result;
}
