async function fetchData() {
  const response = await fetch('https://example.com/api/user'); // Замените URL на ваш API-конечную точку
  const user = await response.json();
  document.getElementById('name').innerText = user.name;
}

fetchData();


async function fetchData() {
  const response = await fetch('https://your-api-endpoint.com/data');
  const data = await response.json();

  document.querySelector('.tip1').innerText = data.rank;
  document.querySelector('.tip2').innerText = data.zerocoin;
  document.querySelector('.tip3').innerText = data.team;
  document.querySelector('.tip4').innerText = data.mentor;
}

fetchData();
