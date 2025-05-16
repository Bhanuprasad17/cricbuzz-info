document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const navButtons = document.querySelectorAll('.nav-button');
  const sections = document.querySelectorAll('.section');
  
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = button.dataset.section;
      
      // Update active states
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Show/hide sections
      sections.forEach(section => {
        if (section.id === targetSection) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
      
      // Reset match detail view when switching sections
      if (targetSection !== 'matches') {
        document.getElementById('matchDetail').classList.add('hidden');
        document.getElementById('matchList').style.display = 'grid';
      }

      // Reset series detail view when switching sections
      if (targetSection !== 'series') {
        document.getElementById('seriesDetail').classList.add('hidden');
        document.getElementById('seriesList').style.display = 'grid';
      }
    });
  });

  // Auth tabs
  const authTabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      
      // Update active states
      authTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show/hide forms
      if (targetTab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
      } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
      }
    });
  });

  // Match functionality
  const matchList = document.getElementById('matchList');
  const matchDetail = document.getElementById('matchDetail');
  const backButton = document.getElementById('backButton');

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  function getTeamColors(teamA, teamB) {
    const teamColors = {
      'India': '#0078BC',
      'Australia': '#FFD700',
      'England': '#15377F',
      'South Africa': '#007A33',
      'New Zealand': '#000000',
      'Pakistan': '#006633',
      'West Indies': '#800000',
      'Sri Lanka': '#003F87',
      'Bangladesh': '#006A4E',
      'Zimbabwe': '#CD0000'
    };

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
    matchDetail.classList.add('fade-in');
    
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

  // Series functionality
  const seriesList = document.getElementById('seriesList');
  const seriesDetail = document.getElementById('seriesDetail');
  const seriesBackButton = document.getElementById('seriesBackButton');

  function getSeriesFormatClass(format) {
    if (format.includes('Test')) return 'format-test';
    if (format.includes('ODI')) return 'format-odi';
    if (format.includes('T20')) return 'format-t20';
    return 'format-test'; // Default
  }

  function getSeriesBackgroundGradient(format) {
    if (format.includes('Test')) {
      return 'linear-gradient(to right, #1e40af, #3b82f6)';
    }
    if (format.includes('ODI')) {
      return 'linear-gradient(to right, #047857, #10b981)';
    }
    if (format.includes('T20')) {
      return 'linear-gradient(to right, #b91c1c, #ef4444)';
    }
    return 'linear-gradient(to right, var(--primary-color), #2e7d32)'; // Default
  }

  function createSeriesCard(series) {
    const card = document.createElement('div');
    card.className = 'series-card';
    
    const gradient = getSeriesBackgroundGradient(series.format);
    
    card.innerHTML = `
      <div class="series-header" style="background: ${gradient}">
        <h3>${series.name}</h3>
        <p>${series.dateRange}</p>
      </div>
      <div class="series-content">
        <div class="series-meta">
          <span class="series-tag">${series.format}</span>
          <span>${series.numberOfMatches} Matches</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Teams</p>
            <p style="font-weight: 500;">${series.teams.length > 30 ? series.teams.substring(0, 30) + '...' : series.teams}</p>
          </div>
          <div style="text-align: right;">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Host</p>
            <p style="font-weight: 500;">${series.host}</p>
          </div>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => showSeriesDetail(series));
    return card;
  }

  function showSeriesDetail(series) {
    seriesList.style.display = 'none';
    seriesDetail.classList.remove('hidden');
    seriesDetail.classList.add('fade-in');
    
    document.getElementById('seriesName').textContent = series.name;
    document.getElementById('seriesDateRange').textContent = series.dateRange;
    document.getElementById('seriesHost').textContent = `Host: ${series.host}`;
    
    const formatElement = document.getElementById('seriesFormat');
    formatElement.textContent = series.format;
    formatElement.className = `series-format-tag ${getSeriesFormatClass(series.format)}`;

    // Render series details
    const detailsHTML = `
      <div class="detail-item">
        <span class="label">Format</span>
        <span class="value">${series.format}</span>
      </div>
      <div class="detail-item">
        <span class="label">Matches</span>
        <span class="value">${series.numberOfMatches}</span>
      </div>
      <div class="detail-item">
        <span class="label">Status</span>
        <span class="value">${series.status || 'Upcoming'}</span>
      </div>
      <div class="detail-item">
        <span class="label">Description</span>
        <span class="value">${series.description || 'No description available'}</span>
      </div>
    `;
    
    document.getElementById('seriesDetails').innerHTML = detailsHTML;

    // Render teams
    let teamsHTML = '';
    if (series.teams.includes(',')) {
      // Multiple teams
      const teamsList = series.teams.split(',').map(team => team.trim());
      teamsHTML = teamsList.map(team => `
        <div class="team-item">
          <span class="value">${team}</span>
        </div>
      `).join('');
    } else {
      // Just two teams or a general description
      teamsHTML = `
        <div class="team-item">
          <span class="value">${series.teams}</span>
        </div>
      `;
    }
    
    document.getElementById('seriesTeams').innerHTML = teamsHTML;

    // Render schedule
    if (series.matches && series.matches.length > 0) {
      const scheduleHTML = series.matches.map(match => {
        const dateStr = formatDate(match.date);
        let resultClass = '';
        
        if (match.result && !match.result.includes('To be played')) {
          resultClass = match.result.includes('won') ? 'result-win' : 'result-draw';
        }
        
        return `
          <div class="schedule-item">
            <div class="schedule-date">${dateStr}</div>
            <div class="schedule-teams">${match.teams}</div>
            <div class="schedule-venue">${match.venue}</div>
            ${match.format ? `<div class="schedule-format">Format: ${match.format}</div>` : ''}
            ${match.result ? `<div class="schedule-result ${resultClass}">${match.result}</div>` : ''}
          </div>
        `;
      }).join('');
      
      document.getElementById('seriesSchedule').innerHTML = scheduleHTML;
    } else {
      document.getElementById('seriesSchedule').innerHTML = '<p>No matches scheduled yet.</p>';
    }

    // Render standings
    if (series.standings && series.standings.length > 0) {
      const standingsHTML = `
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              ${series.format.includes('Test') ? '<th>Drawn</th>' : ''}
              <th>Points</th>
              ${series.format.includes('T20') || series.format.includes('ODI') ? '<th>NRR</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${series.standings.map(standing => `
              <tr>
                <td class="team-name-cell">
                  <span>${standing.team}</span>
                </td>
                <td>${standing.played}</td>
                <td>${standing.won}</td>
                <td>${standing.lost}</td>
                ${series.format.includes('Test') ? `<td>${standing.drawn || 0}</td>` : ''}
                <td>${standing.points}</td>
                ${series.format.includes('T20') || series.format.includes('ODI') ? `<td>${standing.nrr || 0}</td>` : ''}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      
      document.getElementById('seriesStandings').innerHTML = standingsHTML;
    } else if (series.groups && series.groups.length > 0) {
      // For tournament with groups instead of standings
      const groupsHTML = series.groups.map(group => `
        <div class="group-section">
          <h4>${group.name}</h4>
          <ul>
            ${group.teams.map(team => `<li>${team}</li>`).join('')}
          </ul>
        </div>
      `).join('');
      
      document.getElementById('seriesStandings').innerHTML = groupsHTML;
    } else {
      document.getElementById('seriesStandings').innerHTML = '<p>No standings available yet.</p>';
    }
  }

  seriesBackButton.addEventListener('click', () => {
    seriesDetail.classList.add('hidden');
    seriesList.style.display = 'grid';
  });

  // Initialize series cards
  seriesData.forEach(series => {
    seriesList.appendChild(createSeriesCard(series));
  });
});