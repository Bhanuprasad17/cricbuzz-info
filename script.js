const matchesData = [
  {
    id: 1,
    teams: "India vs Australia",
    date: "2025-05-16",
    venue: "Wankhede Stadium",
    result: "India won by 6 wickets",
    players: [
      { name: "Rohit Sharma", runs: 45, wickets: 0 },
      { name: "Shubman Gill", runs: 38, wickets: 0 },
      { name: "Virat Kohli", runs: 85, wickets: 0 },
      { name: "KL Rahul", runs: 25, wickets: 0 },
      { name: "Hardik Pandya", runs: 30, wickets: 1 },
      { name: "Ravindra Jadeja", runs: 20, wickets: 2 },
      { name: "Jasprit Bumrah", runs: 5, wickets: 3 },
      { name: "Mohammed Shami", runs: 8, wickets: 2 },
      { name: "Kuldeep Yadav", runs: 3, wickets: 1 },
      { name: "Suryakumar Yadav", runs: 40, wickets: 0 },
      { name: "Ishan Kishan", runs: 10, wickets: 0 },
      { name: "David Warner", runs: 55, wickets: 0 },
      { name: "Travis Head", runs: 40, wickets: 0 },
      { name: "Steve Smith", runs: 67, wickets: 1 },
      { name: "Marnus Labuschagne", runs: 20, wickets: 0 },
      { name: "Glenn Maxwell", runs: 35, wickets: 2 },
      { name: "Marcus Stoinis", runs: 22, wickets: 1 },
      { name: "Pat Cummins", runs: 15, wickets: 2 },
      { name: "Mitchell Starc", runs: 5, wickets: 3 },
      { name: "Adam Zampa", runs: 2, wickets: 1 },
      { name: "Josh Hazlewood", runs: 1, wickets: 2 },
      { name: "Alex Carey", runs: 28, wickets: 0 }
    ]
  },
  {
    id: 2,
    teams: "England vs South Africa",
    date: "2025-05-15",
    venue: "Lord's Cricket Ground",
    result: "Match drawn",
    players: [
      { name: "Joe Root", runs: 120, wickets: 0 },
      { name: "Ben Stokes", runs: 65, wickets: 2 },
      { name: "Jonny Bairstow", runs: 48, wickets: 0 },
      { name: "Jos Buttler", runs: 36, wickets: 0 },
      { name: "Moeen Ali", runs: 25, wickets: 1 },
      { name: "Chris Woakes", runs: 18, wickets: 2 },
      { name: "Stuart Broad", runs: 10, wickets: 3 },
      { name: "James Anderson", runs: 5, wickets: 2 },
      { name: "Ollie Pope", runs: 42, wickets: 0 },
      { name: "Zac Crawley", runs: 22, wickets: 0 },
      { name: "Jack Leach", runs: 12, wickets: 1 },
      { name: "Dean Elgar", runs: 80, wickets: 0 },
      { name: "Temba Bavuma", runs: 50, wickets: 0 },
      { name: "Aiden Markram", runs: 66, wickets: 0 },
      { name: "Rassie van der Dussen", runs: 42, wickets: 0 },
      { name: "Quinton de Kock", runs: 60, wickets: 0 },
      { name: "Kagiso Rabada", runs: 20, wickets: 4 },
      { name: "Anrich Nortje", runs: 5, wickets: 2 },
      { name: "Keshav Maharaj", runs: 15, wickets: 1 },
      { name: "Marco Jansen", runs: 30, wickets: 2 },
      { name: "Heinrich Klaasen", runs: 25, wickets: 0 },
      { name: "Lungi Ngidi", runs: 8, wickets: 1 }
    ]
  },
  {
    id: 3,
    teams: "New Zealand vs Pakistan",
    date: "2025-05-14",
    venue: "Eden Park",
    result: "New Zealand won by 4 wickets",
    players: [
      { name: "Kane Williamson", runs: 95, wickets: 0 },
      { name: "Martin Guptill", runs: 75, wickets: 0 },
      { name: "Devon Conway", runs: 60, wickets: 0 },
      { name: "Tom Latham", runs: 30, wickets: 0 },
      { name: "Glenn Phillips", runs: 28, wickets: 1 },
      { name: "Daryl Mitchell", runs: 40, wickets: 1 },
      { name: "Tim Southee", runs: 12, wickets: 2 },
      { name: "Trent Boult", runs: 8, wickets: 3 },
      { name: "Ish Sodhi", runs: 10, wickets: 2 },
      { name: "Mitchell Santner", runs: 18, wickets: 2 },
      { name: "Mark Chapman", runs: 15, wickets: 0 },
      { name: "Babar Azam", runs: 70, wickets: 0 },
      { name: "Mohammad Rizwan", runs: 60, wickets: 0 },
      { name: "Fakhar Zaman", runs: 45, wickets: 0 },
      { name: "Imam-ul-Haq", runs: 35, wickets: 0 },
      { name: "Shaheen Afridi", runs: 10, wickets: 3 },
      { name: "Haris Rauf", runs: 5, wickets: 2 },
      { name: "Shadab Khan", runs: 20, wickets: 2 },
      { name: "Mohammad Nawaz", runs: 22, wickets: 1 },
      { name: "Naseem Shah", runs: 3, wickets: 1 },
      { name: "Iftikhar Ahmed", runs: 25, wickets: 0 },
      { name: "Salman Agha", runs: 15, wickets: 0 }
    ]
  },
   {
    id: 4,
    teams: "West Indies vs Bangladesh",
    date: "2025-05-13",
    venue: "Kensington Oval",
    result: "West Indies won by 5 wickets",
    players: [
      { name: "Shai Hope", runs: 55, wickets: 0 },
      { name: "Jason Holder", runs: 40, wickets: 2 },
      { name: "Nicholas Pooran", runs: 60, wickets: 0 },
      { name: "Kieron Pollard", runs: 25, wickets: 1 },
      { name: "Shimron Hetmyer", runs: 35, wickets: 0 },
      { name: "Rovman Powell", runs: 20, wickets: 1 },
      { name: "Alzarri Joseph", runs: 5, wickets: 3 },
      { name: "Oshane Thomas", runs: 3, wickets: 2 },
      { name: "Andre Russell", runs: 10, wickets: 1 },
      { name: "Sunil Narine", runs: 8, wickets: 2 },
      { name: "Jason Mohammed", runs: 15, wickets: 0 },
      { name: "Shakib Al Hasan", runs: 70, wickets: 1 },
      { name: "Tamim Iqbal", runs: 45, wickets: 0 },
      { name: "Mushfiqur Rahim", runs: 30, wickets: 0 },
      { name: "Mahmudullah", runs: 22, wickets: 1 },
      { name: "Mustafizur Rahman", runs: 5, wickets: 3 },
      { name: "Taskin Ahmed", runs: 2, wickets: 2 },
      { name: "Mehidy Hasan", runs: 12, wickets: 1 },
      { name: "Soumya Sarkar", runs: 18, wickets: 0 },
      { name: "Liton Das", runs: 25, wickets: 0 },
      { name: "Najmul Hossain", runs: 10, wickets: 0 },
      { name: "Rubel Hossain", runs: 3, wickets: 2 }
    ]
  },
  {
    id: 5,
    teams: "Sri Lanka vs Zimbabwe",
    date: "2025-05-12",
    venue: "R. Premadasa Stadium",
    result: "Sri Lanka won by 8 wickets",
    players: [
      { name: "Kusal Perera", runs: 80, wickets: 0 },
      { name: "Dasun Shanaka", runs: 40, wickets: 2 },
      { name: "Dinesh Chandimal", runs: 55, wickets: 0 },
      { name: "Angelo Mathews", runs: 25, wickets: 1 },
      { name: "Pathum Nissanka", runs: 30, wickets: 0 },
      { name: "Wanindu Hasaranga", runs: 18, wickets: 3 },
      { name: "Lakshan Sandakan", runs: 10, wickets: 2 },
      { name: "Dushmantha Chameera", runs: 5, wickets: 2 },
      { name: "Chamika Karunaratne", runs: 15, wickets: 1 },
      { name: "Niroshan Dickwella", runs: 20, wickets: 0 },
      { name: "Charith Asalanka", runs: 28, wickets: 0 },
      { name: "Sean Williams", runs: 65, wickets: 0 },
      { name: "Craig Ervine", runs: 40, wickets: 0 },
      { name: "Regis Chakabva", runs: 30, wickets: 0 },
      { name: "Brendan Taylor", runs: 22, wickets: 0 },
      { name: "Kyle Jarvis", runs: 5, wickets: 3 },
      { name: "Blessing Muzarabani", runs: 3, wickets: 2 },
      { name: "Richard Ngarava", runs: 8, wickets: 1 },
      { name: "Wessly Madhevere", runs: 12, wickets: 0 },
      { name: "Tendai Chatara", runs: 7, wickets: 1 },
      { name: "Peter Moor", runs: 10, wickets: 0 },
      { name: "Ryan Burl", runs: 15, wickets: 0 }
    ]
  }
];


document.addEventListener('DOMContentLoaded', () => {
  const matchList = document.getElementById('matchList');
  const matchDetail = document.getElementById('matchDetail');
  const backButton = document.getElementById('backButton');

  const teamColors = {
    'India': '#0078BC',
    'Australia': '#FFD700',
    'England': '#15377F',
    'South Africa': '#007A33',
    'New Zealand': '#000000',
    'Pakistan': '#006633'
  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  function getTeamColors(teamA, teamB) {
    return {
      colorA: teamColors[teamA] || '#3B82F6',
      colorB: teamColors[teamB] || '#10B981'
    };
  }

  function createMatchCard(match) {
    const [teamA, teamB] = match.teams.split(' vs ');
    const { colorA, colorB } = getTeamColors(teamA, teamB);
    
    const card = document.createElement('div');
    card.className = 'match-card';
    
    const resultClass = match.result.includes('won') ? 'result-win' : 'result-draw';
    
    card.innerHTML = `
      <div class="match-card-header" style="background-image: linear-gradient(to right, ${colorA} 50%, ${colorB} 50%)"></div>
      <div class="match-card-content">
        <div class="match-meta">
          <span>${formatDate(match.date)}</span>
          <span>${match.venue}</span>
        </div>
        <div class="match-teams">${match.teams}</div>
        <div class="match-result ${resultClass}">${match.result}</div>
      </div>
    `;
    
    card.addEventListener('click', () => showMatchDetail(match));
    return card;
  }

  function showMatchDetail(match) {
    const [teamA, teamB] = match.teams.split(' vs ');
    const { colorA, colorB } = getTeamColors(teamA, teamB);
    
    matchList.style.display = 'none';
    matchDetail.classList.remove('hidden');
    
    document.getElementById('matchTeams').textContent = match.teams;
    document.getElementById('matchDate').textContent = formatDate(match.date);
    document.getElementById('matchVenue').textContent = match.venue;
    
    const resultElement = document.getElementById('matchResult');
    resultElement.textContent = match.result;
    resultElement.className = `match-result ${match.result.includes('won') ? 'result-win' : 'result-draw'}`;

    // Find top performers
    const topScorer = [...match.players].sort((a, b) => b.runs - a.runs)[0];
    const topWicketTaker = [...match.players].sort((a, b) => b.wickets - a.wickets)[0];
    
    document.getElementById('topPerformers').innerHTML = `
      <div class="stat-item">
        <span>Top Scorer:</span>
        <strong>${topScorer.name} (${topScorer.runs} runs)</strong>
      </div>
      <div class="stat-item">
        <span>Top Wicket Taker:</span>
        <strong>${topWicketTaker.name} (${topWicketTaker.wickets} wickets)</strong>
      </div>
    `;

    const totalRuns = match.players.reduce((sum, player) => sum + player.runs, 0);
    const totalWickets = match.players.reduce((sum, player) => sum + player.wickets, 0);
    
    document.getElementById('matchSummary').innerHTML = `
      <div class="stat-item">
        <span>Total Runs:</span>
        <strong>${totalRuns}</strong>
      </div>
      <div class="stat-item">
        <span>Total Wickets:</span>
        <strong>${totalWickets}</strong>
      </div>
    `;

    // Split players by team
    const midPoint = Math.floor(match.players.length / 2);
    const teamAPlayers = match.players.slice(0, midPoint);
    const teamBPlayers = match.players.slice(midPoint);

    const createPlayerTable = (players, teamColor) => {
      return `
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Runs</th>
              <th>Wickets</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            ${players.map(player => {
              const performance = player.runs + (player.wickets * 20);
              const performancePercentage = Math.min(100, performance / 2);
              
              return `
                <tr>
                  <td>${player.name}</td>
                  <td>${player.runs}</td>
                  <td>${player.wickets}</td>
                  <td>
                    <div class="performance-bar">
                      <div class="performance-fill" 
                           style="width: ${performancePercentage}%; background-color: ${teamColor}">
                      </div>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
    };

    const teamASection = document.getElementById('teamA');
    teamASection.querySelector('h3').textContent = teamA;
    teamASection.querySelector('.player-stats').innerHTML = createPlayerTable(teamAPlayers, colorA);

    const teamBSection = document.getElementById('teamB');
    teamBSection.querySelector('h3').textContent = teamB;
    teamBSection.querySelector('.player-stats').innerHTML = createPlayerTable(teamBPlayers, colorB);
  }

  backButton.addEventListener('click', () => {
    matchDetail.classList.add('hidden');
    matchList.style.display = 'grid';
  });

  // Initialize match cards
  matchesData.forEach(match => {
    matchList.appendChild(createMatchCard(match));
  });
});