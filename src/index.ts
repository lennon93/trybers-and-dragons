import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Lennon');
const player2 = new Character('Xavier');
const player3 = new Character('Santos');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const environment = [monster1, monster2];
const pve = new PVE(player1, environment);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export {
  player1, player2, player3, monster1, monster2, pvp, pve, runBattles,
};