import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }
  
  static override createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}