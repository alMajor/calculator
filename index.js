
function containsNumbers(str) {
  return /\d/.test(str);
}
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("result").value = 0;
  document.querySelectorAll('.equals').forEach(function(item) {
    item.addEventListener('click', function() {
      var value = document.getElementById("result").value
      if (value.includes('x') || value.includes('÷') || value.includes('-') || value.includes('+')){
        if (containsNumbers(document.getElementById("result").value.slice(-1))){
          if (value.includes('x')){
            value = value.replace('x', '*');
          }
          if (value.includes('÷')){
            value = value.replace('÷', '/');
          }
          var result = eval(value)
          document.getElementById("result").value = result
        }
        }
});
       });
       document.getElementById('clear').addEventListener('click', function() {
        document.getElementById("result").value = 0;
      });
    

    document.querySelectorAll('.buttons button').forEach(function(item) {
      if (item.textContent){
        if (item.textContent == "+"){
          item.addEventListener('click', function() {
            if (containsNumbers(document.getElementById("result").value.slice(-1))){
              document.getElementById("result").value = document.getElementById("result").value+"+"
            }
          });
        }
        if (item.textContent == "-"){
          item.addEventListener('click', function() {
            if (containsNumbers(document.getElementById("result").value.slice(-1))){
              document.getElementById("result").value = document.getElementById("result").value+"-"
            }
          });
        }
        if (item.textContent == "X"){
          item.addEventListener('click', function() {
            if (containsNumbers(document.getElementById("result").value.slice(-1))){
              document.getElementById("result").value = document.getElementById("result").value+"x"
            }
          });
        }
        if (item.textContent == "÷"){
          item.addEventListener('click', function() {
            if (containsNumbers(document.getElementById("result").value.slice(-1))){
              document.getElementById("result").value = document.getElementById("result").value+"÷"
            }
          });
        }
        if (item.textContent == "."){
          item.addEventListener('click', function() {
            if (containsNumbers(document.getElementById("result").value.slice(-1))){
              document.getElementById("result").value = document.getElementById("result").value+"."
            }
          });
        }
        if (containsNumbers(item.textContent)){
          item.addEventListener('click', function() {
            if (document.getElementById("result").value == 0){
              document.getElementById("result").value = ""
            }
            document.getElementById("result").value = document.getElementById("result").value + "" + item.textContent;

          });
        }
      }
    })

});
