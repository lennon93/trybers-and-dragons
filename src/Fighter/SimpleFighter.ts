export default interface SimpleFigther {
  lifePoints: number,
  strength: number,

  attack(enemy: SimpleFigther): void;
  receiveDamage(attackPoints: number): number;

}