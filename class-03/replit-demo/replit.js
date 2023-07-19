console.log("hello");

// .map arr method

// initial array
const students = ["val", "francis", "nick", "katy"];

const grade = students.map((student) => {
  return console.log(`${student} passed with a distinction`);
});

const jedi = students.map((student) => {
  return `${student} is now a jedi coder`;
});

console.log(jedi);

for (let i = 0; i < jedi.length; i++) {
  console.log(jedi[i]);
}

const life = students.map(function (student) {
  return console.log(`${student} is now living thier best life!`);
});

// Spread operator

const oldStudents = ["Jack", "Leanna", "Patrick"];
const newStudents = ["Val", "Bernard", "Paolo", "Elisa"];

const allStudents = [...oldStudents, ...newStudents];

console.log(allStudents);

// const allStudents = ["Val", "Bernard", "Paolo", "Elisa", ...oldStudent]
// console.log(allStudents)

const clubDetails = {
  club: "Arsenal",
  nickname: "Gunners",
  manager: "Arteta",
  homeColour: "red",
};

// const topArsenalPlayers = {
//   topGoalie: "Seaman",
//   topDefender: "Adams",
//   topMidfielder: "Veira",
//   topForward: "Wright"
// }

// const club = {...clubDetails, ...topArsenalPlayers}

// console.log(club)

const { club, nickname, ...best } = clubDetails;

console.log(`We love you ${club}, we do`);
console.log(`up the ${nickname}`);
console.log(`The best manager in the world is ${best.manager} and his fav colour is ${best.homeColour}`);
