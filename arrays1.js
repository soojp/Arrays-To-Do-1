function pushFront(arr, value) {
  var answer = [value];
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
  }
  return answer;
}

function popFront(arr) {
  var answer = arr[0];
  var print = [];
  for (let i = 1; i < arr.length; i++) {
    print.push(arr[i]);
  }
  console.log(print);
  return answer;
}

function insertAt(arr, index, val) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      answer.push(val);
      answer.push(arr[i]);
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function removeAt(arr, index) {
  var print = [];
  var answer = arr[index];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      print.push(arr[i]);
    }
  }
  console.log(print);
  return answer;
}

function swapPairs(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) {
      answer[i] = arr[i + 1];
      answer[i + 1] = arr[i];
    } else {
      answer[i] = arr[i];
    }
  }
  return answer;
}

function removeDupes(arr) {
  var answer = [arr[0]];
  var check = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== check) {
      answer.push(arr[i]);
      check = arr[i];
    }
  }
  return answer;
}
