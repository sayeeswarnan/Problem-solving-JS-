let count = 0;

function hello() {
  count++;
  console.log(count);
  if (count === 5) {
    return;
  }
  hello();
}

hello();
