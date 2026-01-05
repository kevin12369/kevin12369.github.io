---
language: 'zh-CN'
title: 'TypeScript 常见面试题总结（2025版）'
description: '- **TypeScript 成为必备技能**：不再是可选项，而是前端开发的标准配置'
publishDate: '2024-01-01'
tags: []
---


# TypeScript 常见面试题总结（2025版）

## 2025年TypeScript面试趋势

- **TypeScript 成为必备技能**：不再是可选项，而是前端开发的标准配置
- **高级类型深入**：泛型、条件类型、映射类型、模板字面量类型
- **类型体操**：复杂的类型操作和类型推导
- **类型安全**：严格模式、类型守卫、类型断言
- **工程化**：tsconfig配置、类型声明、类型检查优化

## 基础概念

### 1. 什么是TypeScript？

TypeScript 是 JavaScript 的超集，添加了静态类型检查。它可以在编译时发现错误，提高代码的可靠性和可维护性。

**特点**：
- 静态类型检查
- 支持ES6+新特性
- 强大的IDE支持
- 渐进式采用

### 2. TypeScript 和 JavaScript 的区别？

| 特性 | JavaScript | TypeScript |
|------|-----------|------------|
| 类型 | 动态类型 | 静态类型 |
| 编译 | 运行时编译 | 编译时编译 |
| 错误发现 | 运行时 | 编译时 |
| IDE支持 | 基础 | 强大 |
| 学习曲线 | 低 | 中等 |

### 3. TypeScript 的优势？

1. **类型安全**：在编译时发现错误
2. **更好的IDE支持**：智能提示、自动补全
3. **代码可维护性**：类型作为文档
4. **重构友好**：类型检查确保重构安全
5. **更好的团队协作**：清晰的接口定义

## 基础类型

### 4. TypeScript 的基本类型有哪些？

```typescript
// 原始类型
let name: string = "张三";
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let uniqueId: symbol = Symbol("id");
let bigNumber: bigint = 100n;

// 数组
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// 元组
let person: [string, number] = ["张三", 25];

// 枚举
enum Color {
  Red,
  Green,
  Blue
}

// any
let anything: any = 10;

// unknown
let value: unknown = 10;

// void
function log(message: string): void {
  console.log(message);
}

// never
function error(message: string): never {
  throw new Error(message);
}

// object
let obj: object = { name: "张三" };
```

### 5. any 和 unknown 的区别？

```typescript
// any：可以是任何值，绕过类型检查
let anything: any = 10;
anything.toUpperCase(); // 编译通过，运行时可能出错

// unknown：可以是任何值，但必须先检查类型
let value: unknown = 10;
if (typeof value === "string") {
  value.toUpperCase(); // 编译通过
}
value.toFixed(); // 编译错误
```

**区别**：
- `any` 绕过类型检查
- `unknown` 是类型安全的 `any`，必须先检查类型才能使用

### 6. void 和 never 的区别？

```typescript
// void：表示函数没有返回值
function log(message: string): void {
  console.log(message);
}

// never：表示函数永远不会返回（抛出错误或无限循环）
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

**区别**：
- `void`：函数可以返回 `undefined`
- `never`：函数永远不会返回

## 接口和类型别名

### 7. 接口（Interface）和类型别名（Type Alias）的区别？

```typescript
// 接口
interface Person {
  name: string;
  age: number;
}

interface Person {
  gender: string; // 可以扩展
}

// 类型别名
type Person = {
  name: string;
  age: number;
};

// type Person = { // 不能重复定义
//   gender: string;
// };
```

**区别**：
- 接口可以扩展（声明合并）
- 类型别名可以表示更复杂的类型（联合类型、交叉类型等）
- 接口只能表示对象类型
- 类型别名可以表示任何类型

### 8. 如何定义可选属性和只读属性？

```typescript
interface Person {
  name: string;
  age?: number; // 可选属性
  readonly id: number; // 只读属性
}

const person: Person = {
  name: "张三",
  id: 1
  // age 是可选的
};

// person.id = 2; // 错误：只读属性不能修改
```

## 函数

### 9. 如何定义函数类型？

```typescript
// 方式1：函数声明
function add(a: number, b: number): number {
  return a + b;
}

// 方式2：函数表达式
const add: (a: number, b: number) => number = function(a, b) {
  return a + b;
};

// 方式3：箭头函数
const add = (a: number, b: number): number => {
  return a + b;
};

// 方式4：使用类型别名
type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;
```

### 10. 如何定义可选参数和默认参数？

```typescript
// 可选参数
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}

// 默认参数
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

// 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

## 泛型

### 11. 什么是泛型？如何使用？

泛型允许我们在定义函数、接口或类时，不预先指定具体的类型，而在使用时再指定类型。

```typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(10);
const str = identity<string>("hello");

// 类型推断
const num = identity(10); // 自动推断为 number

// 泛型接口
interface Box<T> {
  value: T;
}

const box: Box<number> = { value: 10 };

// 泛型类
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
```

### 12. 泛型约束

```typescript
// 约束泛型必须有 length 属性
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
logLength(10); // 错误：number 没有 length 属性

// 使用 keyof 约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "张三", age: 25 };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age"); // number
```

## 高级类型

### 13. 联合类型和交叉类型

```typescript
// 联合类型
type ID = number | string;

function printId(id: ID): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// 交叉类型
interface Person {
  name: string;
}

interface Employee {
  id: number;
}

type PersonEmployee = Person & Employee;

const personEmployee: PersonEmployee = {
  name: "张三",
  id: 1
};
```

### 14. 类型守卫

```typescript
// typeof 类型守卫
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// instanceof 类型守卫
class Dog {
  bark(): void {
    console.log("汪汪");
  }
}

class Cat {
  meow(): void {
    console.log("喵喵");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// 自定义类型守卫
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function isBird(animal: Bird | Fish): animal is Bird {
  return (animal as Bird).fly !== undefined;
}

function move(animal: Bird | Fish): void {
  if (isBird(animal)) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```

### 15. 条件类型

```typescript
// 基本语法
type NonNullable<T> = T extends null | undefined ? never : T;

type T1 = NonNullable<string | null>; // string
type T2 = NonNullable<number | undefined>; // number

// 分布式条件类型
type ToArray<T> = T extends any ? T[] : never;

type T3 = ToArray<string>; // string[]
type T4 = ToArray<string | number>; // string[] | number[]

// 条件类型推断
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fn(): string {
  return "hello";
}

type T5 = ReturnType<typeof fn>; // string
```

### 16. 映射类型

```typescript
// 基本映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>; // 所有属性只读
type PartialPerson = Partial<Person>; // 所有属性可选

// 映射修饰符
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

// 键重映射
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }
```

### 17. 模板字面量类型

```typescript
// 基本用法
type EventName<T extends string> = `on${Capitalize<T>}`;

type T1 = EventName<"click">; // "onClick"
type T2 = EventName<"focus">; // "onFocus"

// 字符串联合类型
type Color = "red" | "blue" | "green";
type Quantity = "light" | "dark";

type ColorName = `${Quantity | ""}${Capitalize<Color>}`;
// "lightRed" | "darkRed" | "Red" | "lightBlue" | "darkBlue" | "Blue" | ...

// 字符串操作类型
type Trim<S extends string> = S extends ` ${infer T}` | `${infer T} `
  ? Trim<T>
  : S;

type T3 = Trim<"  hello  ">; // "hello"
```

## 类型推断

### 18. 什么是类型推断？

TypeScript 会根据上下文自动推断变量的类型。

```typescript
// 变量推断
let name = "张三"; // 推断为 string
let age = 25; // 推断为 number

// 函数返回值推断
function add(a: number, b: number) {
  return a + b; // 推断返回类型为 number
}

// 最佳通用类型推断
let arr = [0, 1, null]; // 推断为 (number | null)[]
```

### 19. 类型断言

```typescript
// 方式1：尖括号语法
let value: any = "hello";
let length: number = (<string>value).length;

// 方式2：as 语法（推荐）
let value: any = "hello";
let length: number = (value as string).length;

// 非空断言
function printName(name: string | null): void {
  console.log(name!.toUpperCase()); // 断言 name 不为 null
}
```

## 装饰器

### 20. 什么是装饰器？

装饰器是一种特殊的声明，可以附加到类、方法、属性或参数上，用于修改它们的行为。

```typescript
// 类装饰器
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}

// 方法装饰器
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

// 属性装饰器
function format(target: any, key: string) {
  let value = target[key];
  const getter = () => value;
  const setter = (newValue: string) => {
    value = newValue.trim();
  };
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person {
  @format
  name: string;
}

// 参数装饰器
function required(target: any, key: string, index: number) {
  console.log(`Parameter at index ${index} in ${key} is required`);
}

class User {
  greet(@required name: string): void {
    console.log(`Hello, ${name}`);
  }
}
```

## 类型声明

### 21. 什么是类型声明文件？

类型声明文件（`.d.ts`）用于为JavaScript库提供类型信息。

```typescript
// 声明全局变量
declare const jQuery: (selector: string) => any;

// 声明全局函数
declare function greet(name: string): void;

// 声明全局类
declare class Person {
  constructor(name: string);
  name: string;
  greet(): void;
}

// 声明模块
declare module "my-library" {
  export function foo(): string;
  export const bar: number;
}

// 声明文件
// @types/my-library/index.d.ts
```

### 22. 如何为第三方库添加类型？

```typescript
// 方式1：使用 @types 包
npm install @types/lodash

// 方式2：创建类型声明文件
// src/types/lodash.d.ts
declare module "lodash" {
  export function map<T, U>(array: T[], iteratee: (value: T) => U): U[];
  export function filter<T>(array: T[], predicate: (value: T) => boolean): T[];
}

// 方式3：使用 declare module
declare module "my-untyped-library" {
  export const someFunction: (arg: string) => number;
}
```

## 配置

### 23. tsconfig.json 常用配置

```json
{
  "compilerOptions": {
    "target": "ES2020", // 编译目标
    "module": "ESNext", // 模块系统
    "lib": ["ES2020", "DOM"], // 包含的库
    "outDir": "./dist", // 输出目录
    "rootDir": "./src", // 根目录
    "strict": true, // 启用严格模式
    "esModuleInterop": true, // ES模块互操作
    "skipLibCheck": true, // 跳过库文件检查
    "forceConsistentCasingInFileNames": true, // 强制文件名大小写一致
    "resolveJsonModule": true, // 解析JSON模块
    "moduleResolution": "node", // 模块解析策略
    "allowJs": true, // 允许JS文件
    "checkJs": true, // 检查JS文件
    "jsx": "react", // JSX支持
    "declaration": true, // 生成声明文件
    "declarationMap": true, // 生成声明文件映射
    "sourceMap": true, // 生成源映射
    "noUnusedLocals": true, // 检查未使用的局部变量
    "noUnusedParameters": true, // 检查未使用的参数
    "noImplicitReturns": true, // 检查隐式返回
    "noFallthroughCasesInSwitch": true, // 检查switch穿透
    "allowSyntheticDefaultImports": true, // 允许合成默认导入
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 启用装饰器元数据
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 2025年高频考点

### 24. 类型体操

```typescript
// 实现一个简单的类型体操
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### 25. 工具类型

```typescript
// Partial：所有属性可选
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Required：所有属性必需
type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Readonly：所有属性只读
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Record：创建对象类型
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// Pick：选取部分属性
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit：排除部分属性
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Exclude：排除联合类型中的某些类型
type Exclude<T, U> = T extends U ? never : T;

// Extract：提取联合类型中的某些类型
type Extract<T, U> = T extends U ? T : never;

// NonNullable：排除 null 和 undefined
type NonNullable<T> = T extends null | undefined ? never : T;

// ReturnType：获取函数返回值类型
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

// Parameters：获取函数参数类型
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
```

### 26. 类型推导

```typescript
// 推导数组元素类型
type ElementType<T extends any[]> = T extends (infer U)[] ? U : never;

type T1 = ElementType<[string, number]>; // string | number

// 推导函数参数类型
type FirstParameter<T extends (...args: any[]) => any> = T extends (arg: infer P, ...args: any[]) => any ? P : never;

function fn(name: string, age: number): void {}

type T2 = FirstParameter<typeof fn>; // string

// 推导Promise返回值类型
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type T3 = UnwrapPromise<Promise<string>>; // string
```

## 最佳实践

### 27. TypeScript 最佳实践

1. **启用严格模式**：在 `tsconfig.json` 中设置 `"strict": true`
2. **避免使用 any**：使用 `unknown` 替代
3. **使用类型守卫**：而不是类型断言
4. **优先使用接口**：对于对象类型
5. **使用类型别名**：对于联合类型、交叉类型等
6. **使用泛型**：提高代码复用性
7. **编写类型声明文件**：为第三方库添加类型
8. **使用工具类型**：简化类型定义
9. **保持类型简洁**：避免过度复杂的类型
10. **定期更新TypeScript**：使用最新特性

## 常见问题

### 28. 如何解决类型错误？

1. **检查类型定义**：确保类型定义正确
2. **使用类型守卫**：缩小类型范围
3. **使用类型断言**：谨慎使用
4. **使用 `as const`**：创建只读字面量类型
5. **使用 `satisfies`**：验证类型但不改变类型

```typescript
// satisfies 操作符
type Colors = Record<string, string | { r: number; g: number; b: number }>;

const theme = {
  primary: "red",
  secondary: { r: 0, g: 255, b: 0 }
} satisfies Colors;

// theme.primary 仍然是 string，而不是 Record<string, string | {...}>
```

### 29. 如何处理第三方库的类型问题？

1. **查找 @types 包**：`npm install @types/library-name`
2. **创建类型声明文件**：在 `src/types` 目录下创建 `.d.ts` 文件
3. **使用 declare module**：为未类型化的模块添加类型
4. **使用 any**：临时解决方案（不推荐）
5. **提交 PR**：为开源项目贡献类型定义

## 总结

TypeScript 是现代前端开发的重要工具，它通过静态类型检查提高了代码的可靠性和可维护性。掌握 TypeScript 的核心概念和高级特性，能够帮助开发者编写更安全、更高效的代码。

**学习建议**：
1. 从基础类型开始，逐步学习高级类型
2. 多实践，在实际项目中应用 TypeScript
3. 阅读官方文档和最佳实践
4. 关注 TypeScript 的最新发展

## 参考链接

[TypeScript 官方文档](https://www.typescriptlang.org/docs/)
[TypeScript 深入理解](https://jkchao.github.io/typescript-book-chinese/)
[TypeScript 类型体操](https://github.com/type-challenges/type-challenges)