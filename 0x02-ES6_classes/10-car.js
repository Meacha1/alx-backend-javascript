const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = new Car(this._brand, this._motor, this._color);
    Object.defineProperty(clone, cloneSymbol, {
      value: true,
      enumerable: false,
      writable: false,
      configurable: false,
    });
    return clone;
  }
}
