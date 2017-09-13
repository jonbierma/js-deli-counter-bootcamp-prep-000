
function takeANumber(currentLine, newCustomer){
  currentLine.push(newCustomer);
  var position = currentLine.length
  return `Welcome, ${newCustomer}. You are number ${position} in line`
}

function nowServing(currentLine){
  if (currentLine.length > 0){
    var currentCustomer = currentLine.shift()
    return `Currently serving ${currentCustomer}`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var list=[]
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var lineString = "The line is currently: "
    for (var i=0; i<line.length; i++){
      lineString = lineString + `${i+1}. ${line[i]}, `
    }
    return lineString
  }
}
