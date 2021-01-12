function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var call = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return call;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var textBase = "The line is currently: "

    for (let i = 0; i < katzDeliLine.length; i++) {
      `${i + 1}. ${katzDeliLine[i]}`
    }
  } else {
    return "The line is currently empty."
  }
}
