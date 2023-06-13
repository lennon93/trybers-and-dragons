import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

type Environment = Fighter | SimpleFighter | Monster;

export default class PVE extends Battle {
  private _environment: Environment[];

  constructor(player: Fighter, environment: Environment[]) {
    super(player);
    this._environment = environment;
  }

  override fight(): number {
    this._environment.forEach((enemy) => {
      while (this.player.lifePoints >= 0 && enemy.lifePoints >= 0) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });
    return super.fight();
  }
}