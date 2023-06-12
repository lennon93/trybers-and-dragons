import Energy from '../Energy';

export default interface Figther {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,

  attack(enemy: Figther): void;
  special?(enemy: Figther): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;

}
