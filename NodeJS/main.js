var rd = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var data = [0, 0, "", 0]
process.stdout.write("First number: ");
rd.on('line', (ln) => {
  if(data[3] == 2){
    data[2] = ln
    eval(`var result = ${data[0]} ${data[2]} ${data[1]}; console.log("Result: " + result); process.exit(0)`);
  }
  if(data[3] == 1){
    data[1] = parseInt(ln);
    data[3]++
    process.stdout.write("Act: ");
  }
  if(data[3] == 0){
    data[0] = parseInt(ln);
    data[3]++
    process.stdout.write("Second number: ");
  }
})
