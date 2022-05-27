import Character from './classes/character';
import Team from './classes/team';

const archer = new Character('archer');
const mag = new Character('mag');
const warrior = new Character('war');
const dead = new Character('dead');
const myTeam = new Team();

console.log('app worked');
console.log(myTeam.add(archer));
console.log(myTeam.addAll(archer, mag, warrior, dead));
console.log(myTeam.toArray());
