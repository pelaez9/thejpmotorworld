// TODO: Define the Wheel class
class Wheel {
  // TODO: Declare properties of the Wheel class
  // Properties should include diameter (number) and brand (string)
  diameter: number;
  brand: string;

  // TODO: Create a constructor that accepts the properties of the Wheel class
  constructor(diameter: number, brand: string) {
    this.diameter = diameter;
    this.brand = brand;
  }

  // TODO: Implement a method to print details of the wheel
  printDetails(): void {
    console.log(`Wheel: ${this.diameter} inches, ${this.brand}`);
  }

  // Adding getter methods for the diameter and brand (for consistency with how properties are accessed in Car.ts)
  getDiameter(): number {
    return this.diameter;
  }

  getTireBrand(): string {
    return this.brand;
  }
}

// Export the Wheel class as the default export
export default Wheel;
