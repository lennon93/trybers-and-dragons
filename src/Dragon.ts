import { SimpleFighter } from './Fighter';
import Monster from './Monster';

export default class Dragon implements Monster {
  _lifePoints: number;
  _strength: number;
  
  constructor() {
    this._lifePoints = 999;
    this._strength = 63;      
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
 
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}