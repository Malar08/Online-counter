var count = 0;
document.querySelector("#counter").value = 0;

function increment() {
  count++;
  document.getElementById("counter").value = count;
}
function decrement() {
  if(count>0){
    count--;
    document.getElementById("counter").value = count;
  }
}
function refresh() {
  count = 0;
  document.getElementById("counter").value = 0;
}
