/*
Coupling - is a measure of dependency of the one software unit on another. 
There is a list of attributes that indicates tight coupling in your system:
1.	Unit has access to the private data and methods to another unit
2.	Global/shared scope is used
3.	Direct dependency is used instead of dependency inversion approach
4.	Unit depends on the exact another unit instance instead of the dependency on an interface 
5.	Modifications in the one unit leads to the modifications in another ones
6.	Events are not used for communication
7.	Class can’t be consumed and tested independently of other (concrete) classes.
Cohesion – it’s partially about a single responsibility principle when we have only one reason to modify a software unit. It also means that all attributes and methods that included into this unit are aimed at ensuring this one particular responsibility. Additionally, all these attributes and methods are bound together and use each other to support this particular unit’s concern.
*/

class LowCohesionExample {
  private property_1: string;
  private property_2: string;

  /**
   * Unecessary property for some other purporse that is used outside
   */
  public unecessary_property: string;

  // method doesn't use its own class properties
  private getSelector(): string {
    return "state.feature.data";
  }

  private normalizeProperties(): string {
    return this.property_1 + this.property_2;
  }

  public getProperties(): string {
    return this.normalizeProperties();
  }
}

class HighCohesionExample {
  private property_1: string;
  private property_2: string;

  private concatProperties(): string {
    return this.property_1 + this.property_2;
  }

  public getProperties(): string {
    return this.concatProperties();
  }
}
