let myButton = document.getElementById('input-ready')
let string = document.getElementById('inputBox')
let sorted = document.getElementById("sorted")

myButton.addEventListener('click', function() {
  axios.post('/string', {
    unsorted: string.value
  })
  .then(function (response) {
    console.log('got something back', response.data)
    sorted.textContent = response.data
    string.value = ''
  })
  .catch(function (error) {
    console.log('made an error!!!')
    console.log(error);
  });
})