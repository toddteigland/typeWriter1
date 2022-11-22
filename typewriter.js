const sentence = "Hello there";
let time = 0;

for (let i = 0; i < sentence.length; i++) {
  if (i < sentence.length) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, time);
    time += 100;
  }
}
setTimeout(() => {
  console.log('');
}, time);

