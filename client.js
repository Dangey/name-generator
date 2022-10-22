console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', async function(e) {

  fetch('/clicked', {method: 'GET'})
    .then(async function(response) {
      if(response.ok) {
        document.getElementById("text").innerHTML = await response.text();
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});
