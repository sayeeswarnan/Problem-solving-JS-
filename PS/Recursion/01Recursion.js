let count = 0;

function hello() {
  count++;
  console.log(count);
  hello();
}

hello();

// run using node file_name or file relative path
