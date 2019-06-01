const display = document.getElementById('display');
const btn = document.getElementById('btn').addEventListener('click', () => {
  let select = document.getElementById('select');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100', true);
  xhr.onload = function() {
    if (this.status == 200) {
      let result = JSON.parse(this.responseText);
      for (let i in result) {
        select.innerHTML += `<option value="${i}"> ${i}-${result[i].name} </option>`;
      }
      select.addEventListener('change', () => {
        let selectedIndex = select[select.selectedIndex].value;
        let contUrl = result[selectedIndex].contributors_url;
        const cont = new XMLHttpRequest();
        cont.open('get', 'contUrl', true);
        cont.onload = function() {
          console.log(console.log(this.responseText));
          cont.send();
        };

        let id = (display.innerHTML = `<ul>
                <li><strong>Id:</strong> ${result[selectedIndex].id}</li>
                <li><strong>Repository:</strong> ${result[selectedIndex].name}</li> 
                <li><strong>Description:</strong> ${result[selectedIndex].description}</li> 
                <li><strong>Forks:</strong> ${result[selectedIndex].forks}</li> 
                <li><strong>Updated: </strong>${result[selectedIndex].updated_at}</li> 
                <strong>Contributions:</strong><img src=>
                </ul>`);
      });
    }
  };
  xhr.send();
});
