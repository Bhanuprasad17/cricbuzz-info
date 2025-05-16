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

const seriesData = [
  {
    id: 1,
    name: "Border-Gavaskar Trophy",
    format: "Test",
    dateRange: "Dec 2025 - Jan 2026",
    teams: "India, Australia",
    host: "Australia",
    numberOfMatches: 5,
    description: "One of cricket's most prestigious Test series between India and Australia.",
    status: "Upcoming",
    matches: [
      {
        matchNumber: 1,
        teams: "India vs Australia",
        date: "2025-12-04",
        venue: "The Gabba, Brisbane",
        result: "To be played"
      },
      {
        matchNumber: 2,
        teams: "India vs Australia",
        date: "2025-12-12",
        venue: "Adelaide Oval, Adelaide",
        result: "To be played"
      },
      {
        matchNumber: 3,
        teams: "India vs Australia",
        date: "2025-12-26",
        venue: "Melbourne Cricket Ground, Melbourne",
        result: "To be played"
      },
      {
        matchNumber: 4,
        teams: "India vs Australia",
        date: "2026-01-05",
        venue: "Sydney Cricket Ground, Sydney",
        result: "To be played"
      },
      {
        matchNumber: 5,
        teams: "India vs Australia",
        date: "2026-01-15",
        venue: "Perth Stadium, Perth",
        result: "To be played"
      }
    ],
    standings: [
      { team: "India", played: 0, won: 0, lost: 0, drawn: 0, points: 0 },
      { team: "Australia", played: 0, won: 0, lost: 0, drawn: 0, points: 0 }
    ]
  },
  {
    id: 2,
    name: "England Tour of India",
    format: "Test, ODI, T20I",
    dateRange: "Oct 2025 - Nov 2025",
    teams: "India, England",
    host: "India",
    numberOfMatches: 10,
    description: "A comprehensive tour featuring Tests, ODIs and T20Is between India and England.",
    status: "Upcoming",
    matches: [
      {
        matchNumber: 1,
        teams: "India vs England",
        date: "2025-10-05",
        venue: "Narendra Modi Stadium, Ahmedabad",
        format: "Test",
        result: "To be played"
      },
      {
        matchNumber: 2,
        teams: "India vs England",
        date: "2025-10-13",
        venue: "M. A. Chidambaram Stadium, Chennai",
        format: "Test",
        result: "To be played"
      },
      {
        matchNumber: 3,
        teams: "India vs England",
        date: "2025-10-21",
        venue: "Eden Gardens, Kolkata",
        format: "Test",
        result: "To be played"
      },
      {
        matchNumber: 4,
        teams: "India vs England",
        date: "2025-10-30",
        venue: "Wankhede Stadium, Mumbai",
        format: "ODI",
        result: "To be played"
      },
      {
        matchNumber: 5,
        teams: "India vs England",
        date: "2025-11-02",
        venue: "M. Chinnaswamy Stadium, Bangalore",
        format: "ODI",
        result: "To be played"
      },
      {
        matchNumber: 6,
        teams: "India vs England",
        date: "2025-11-05",
        venue: "Rajiv Gandhi International Stadium, Hyderabad",
        format: "ODI",
        result: "To be played"
      },
      {
        matchNumber: 7,
        teams: "India vs England",
        date: "2025-11-08",
        venue: "Arun Jaitley Stadium, Delhi",
        format: "T20I",
        result: "To be played"
      },
      {
        matchNumber: 8,
        teams: "India vs England",
        date: "2025-11-10",
        venue: "Punjab Cricket Association Stadium, Mohali",
        format: "T20I",
        result: "To be played"
      },
      {
        matchNumber: 9,
        teams: "India vs England",
        date: "2025-11-13",
        venue: "Barsapara Cricket Stadium, Guwahati",
        format: "T20I",
        result: "To be played"
      },
      {
        matchNumber: 10,
        teams: "India vs England",
        date: "2025-11-16",
        venue: "JSCA International Stadium, Ranchi",
        format: "T20I",
        result: "To be played"
      }
    ],
    standings: [
      { team: "India", played: 0, won: 0, lost: 0, drawn: 0, points: 0 },
      { team: "England", played: 0, won: 0, lost: 0, drawn: 0, points: 0 }
    ]
  },
  {
    id: 3,
    name: "ICC T20 World Cup",
    format: "T20I",
    dateRange: "Aug 2025 - Sep 2025",
    teams: "Multiple Teams",
    host: "South Africa",
    numberOfMatches: 45,
    description: "The premier international championship for Twenty20 International cricket.",
    status: "Upcoming",
    matches: [
      {
        matchNumber: 1,
        teams: "South Africa vs England",
        date: "2025-08-15",
        venue: "The Wanderers Stadium, Johannesburg",
        result: "To be played"
      },
      {
        matchNumber: 2,
        teams: "India vs Australia",
        date: "2025-08-16",
        venue: "Newlands, Cape Town",
        result: "To be played"
      },
      {
        matchNumber: 3,
        teams: "West Indies vs Pakistan",
        date: "2025-08-17",
        venue: "Kingsmead, Durban",
        result: "To be played"
      },
      {
        matchNumber: 4,
        teams: "New Zealand vs Bangladesh",
        date: "2025-08-18",
        venue: "St George's Park, Port Elizabeth",
        result: "To be played"
      },
      {
        matchNumber: 5,
        teams: "Sri Lanka vs Afghanistan",
        date: "2025-08-19",
        venue: "SuperSport Park, Centurion",
        result: "To be played"
      }
    ],
    groups: [
      {
        name: "Group A",
        teams: ["South Africa", "England", "West Indies", "Afghanistan", "Netherlands"]
      },
      {
        name: "Group B",
        teams: ["India", "Australia", "Pakistan", "Bangladesh", "Scotland"]
      },
      {
        name: "Group C",
        teams: ["New Zealand", "Sri Lanka", "Zimbabwe", "Ireland", "UAE"]
      },
      {
        name: "Group D",
        teams: ["Caribbean", "USA", "Canada", "Nepal", "Oman"]
      }
    ]
  },
  {
    id: 4,
    name: "Pakistan Super League",
    format: "T20",
    dateRange: "Jul 2025",
    teams: "Karachi Kings, Lahore Qalandars, Multan Sultans, Islamabad United, Peshawar Zalmi, Quetta Gladiators",
    host: "Pakistan",
    numberOfMatches: 34,
    description: "Pakistan's premier professional Twenty20 cricket league.",
    status: "Upcoming",
    matches: [
      {
        matchNumber: 1,
        teams: "Karachi Kings vs Lahore Qalandars",
        date: "2025-07-02",
        venue: "National Stadium, Karachi",
        result: "To be played"
      },
      {
        matchNumber: 2,
        teams: "Multan Sultans vs Islamabad United",
        date: "2025-07-03",
        venue: "Multan Cricket Stadium, Multan",
        result: "To be played"
      },
      {
        matchNumber: 3,
        teams: "Peshawar Zalmi vs Quetta Gladiators",
        date: "2025-07-04",
        venue: "Rawalpindi Cricket Stadium, Rawalpindi",
        result: "To be played"
      }
    ],
    standings: [
      { team: "Karachi Kings", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Lahore Qalandars", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Multan Sultans", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Islamabad United", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Peshawar Zalmi", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Quetta Gladiators", played: 0, won: 0, lost: 0, points: 0, nrr: 0 }
    ]
  },
  {
    id: 5,
    name: "Caribbean Premier League",
    format: "T20",
    dateRange: "Jun 2025 - Jul 2025",
    teams: "Trinbago Knight Riders, St Lucia Kings, Guyana Amazon Warriors, Jamaica Tallawahs, St Kitts & Nevis Patriots, Barbados Royals",
    host: "West Indies",
    numberOfMatches: 33,
    description: "The premier Twenty20 cricket tournament in the Caribbean.",
    status: "Upcoming",
    matches: [
      {
        matchNumber: 1,
        teams: "Trinbago Knight Riders vs St Lucia Kings",
        date: "2025-06-05",
        venue: "Queen's Park Oval, Trinidad",
        result: "To be played"
      },
      {
        matchNumber: 2,
        teams: "Guyana Amazon Warriors vs Jamaica Tallawahs",
        date: "2025-06-06",
        venue: "Providence Stadium, Guyana",
        result: "To be played"
      },
      {
        matchNumber: 3,
        teams: "St Kitts & Nevis Patriots vs Barbados Royals",
        date: "2025-06-07",
        venue: "Warner Park Sporting Complex, St Kitts",
        result: "To be played"
      }
    ],
    standings: [
      { team: "Trinbago Knight Riders", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "St Lucia Kings", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Guyana Amazon Warriors", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Jamaica Tallawahs", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "St Kitts & Nevis Patriots", played: 0, won: 0, lost: 0, points: 0, nrr: 0 },
      { team: "Barbados Royals", played: 0, won: 0, lost: 0, points: 0, nrr: 0 }
    ]
  }
];