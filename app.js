const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE


let currentYear = 2023
let jsReleaseYear = 1995
let jsAge = currentYear - jsReleaseYear
console.log(`current age of JavaScript is ${currentYear - jsReleaseYear}`)

if(jsAge >= 18){
  console.log(`JavaScript is old enough to vote`)
   jsAge = 17
}

if(jsAge >= 18){
  console.log(`JavaScript is old enough to vote`)
} else{
  console.log(`JavaScript is not old enough to vote`)
}

console.log(`starting`)
for(let i = 0;i <= 100; i++){
  if (i % 10 == 0)
  console.log(i)
}
console.log(`finished`)
console.log(`${user.name} lives at ${user.address.street}, ${user.address.city}`)

for(let i = 0; i < cases.length; i++){
  console.log(`${cases[i].title} , ${cases[i].releaseYear}`)
}
console.log(`List Complete`)

for (let i = 0; i < cases.length; i++){
  if(cases[i].releaseYear == `1903`){
    console.log(`${cases[i].title}`) 
    found = true
  }
}
if(found = true){
  console.log(`These are the titles from 1903`)
}

