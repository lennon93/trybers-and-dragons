import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }
  
  static override createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
