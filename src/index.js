module.exports = function toReadable(number) {
  let items = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let item = number % 10; //items => remainder of division by 10
  let dozen = (number - item) / 10; //count 10 in 2digit number up 100
  let dozenNext = ((number - item) / 10) % 10; // count 10 in 3digit number 100 - 999
  let countHundreds = (number - item - dozenNext * 10) / 100; //count 100

  if (number < 10) {
    return items[number];
  }
  else if (number >= 10 && number < 20) {
    return teen[item];
  }
  else if (number >= 20 && number < 100) {
    if (number % 10 === 0) {
      return dozens[dozen];
    }
    else {
      return dozens[dozen] + ' ' + items[item];
    }
  }

  else {
    if (number % 100 === 0) {
      return items[countHundreds] + ' ' + 'hundred';//++
    }
    else if (number - (countHundreds * 100) === 10) {
      return items[countHundreds] + ' ' + 'hundred' + ' ' + teen[item]
    }
    else if (number % 10 === 0) {
      return items[countHundreds] + ' ' + 'hundred' + ' ' + dozens[dozenNext]
    }
    else if ((number - countHundreds * 100) < 10) {
      return items[countHundreds] + ' ' + 'hundred' + ' ' + items[item];
    }
    else if ((number - countHundreds * 100) < 20) {
      return items[countHundreds] + ' ' + 'hundred' + ' ' + teen[item];
    }
    else {
      return items[countHundreds] + ' ' + 'hundred' + ' ' + dozens[dozenNext] + ' ' + items[item];
    }

  }
}











