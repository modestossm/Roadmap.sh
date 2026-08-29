// 1. Object Types - Optional Properties
interface PaintOptions {
    shape: MyShape;
    xPos?: number; // The ? after de xPos indicates the optional property
    yPos?: number; // The ? after de yPos indicates the optional property
}
type MyShape = {

}
function getShape(): MyShape {
    return {};
}

function paintShape(opts: PaintOptions) {
    // We can just handle undefined specially by checking for it:
    let xPos = opts.xPos === undefined ? 0 : opts.xPos; // let xPos: number
    let yPos = opts.yPos === undefined ? 0 : opts.yPos; // let yPos: number
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });


// 2. readonly Properties
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  // obj.prop = "hello"; // Error: Cannot assign to 'prop' because it is a read-only property.
}

// 3. Excess Property Checks
interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
// let mySquare1 = createSquare({ colour: "red", width: 100 });
//Error: Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

// Getting around these checks is actually really simple. The easiest method is to just use a type assertion:
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // It's OK

// However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.
interface SquareConfig {
    // declaration merging
    [propName: string]: unknown;
}
let mySquare3 = createSquare({ colour: "red", width: 100 }); // It's OK 


// 4. Extending Types
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};