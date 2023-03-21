// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);
function writeCards(names, event) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}
const names = ['Alice', 'Bob', 'Charlie'];
const event = 'birthday';
const cards = writeCards(names, event);
console.log(cards);
function createThankYouMessages(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for attending the ${event} event!`);
    }
    return messages;
  }
  const names2 = ['Alice', 'Bob', 'Charlie'];
  const event2 = 'charity auction';
  const messages = createThankYouMessages(names2, event2);
  console.log(messages);
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(10);
