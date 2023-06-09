import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdRacesInstances = 0;

  constructor(maxLifePoints: number, name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Dwarf._createdRacesInstances += 1;
  }
  
  static override createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
