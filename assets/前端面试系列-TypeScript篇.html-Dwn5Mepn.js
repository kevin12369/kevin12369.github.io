import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,o as d}from"./app-BnzN889n.js";const l={};function r(a,e){return d(),i("div",null,[...e[0]||(e[0]=[s(`<h1 id="typescript-常见面试题总结-2025版" tabindex="-1"><a class="header-anchor" href="#typescript-常见面试题总结-2025版" aria-hidden="true">#</a> TypeScript 常见面试题总结（2025版）</h1><h2 id="_2025年typescript面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年typescript面试趋势" aria-hidden="true">#</a> 2025年TypeScript面试趋势</h2><ul><li><strong>TypeScript 成为必备技能</strong>：不再是可选项，而是前端开发的标准配置</li><li><strong>高级类型深入</strong>：泛型、条件类型、映射类型、模板字面量类型</li><li><strong>类型体操</strong>：复杂的类型操作和类型推导</li><li><strong>类型安全</strong>：严格模式、类型守卫、类型断言</li><li><strong>工程化</strong>：tsconfig配置、类型声明、类型检查优化</li></ul><h2 id="基础概念" tabindex="-1"><a class="header-anchor" href="#基础概念" aria-hidden="true">#</a> 基础概念</h2><h3 id="_1-什么是typescript" tabindex="-1"><a class="header-anchor" href="#_1-什么是typescript" aria-hidden="true">#</a> 1. 什么是TypeScript？</h3><p>TypeScript 是 JavaScript 的超集，添加了静态类型检查。它可以在编译时发现错误，提高代码的可靠性和可维护性。</p><p><strong>特点</strong>：</p><ul><li>静态类型检查</li><li>支持ES6+新特性</li><li>强大的IDE支持</li><li>渐进式采用</li></ul><h3 id="_2-typescript-和-javascript-的区别" tabindex="-1"><a class="header-anchor" href="#_2-typescript-和-javascript-的区别" aria-hidden="true">#</a> 2. TypeScript 和 JavaScript 的区别？</h3><table><thead><tr><th>特性</th><th>JavaScript</th><th>TypeScript</th></tr></thead><tbody><tr><td>类型</td><td>动态类型</td><td>静态类型</td></tr><tr><td>编译</td><td>运行时编译</td><td>编译时编译</td></tr><tr><td>错误发现</td><td>运行时</td><td>编译时</td></tr><tr><td>IDE支持</td><td>基础</td><td>强大</td></tr><tr><td>学习曲线</td><td>低</td><td>中等</td></tr></tbody></table><h3 id="_3-typescript-的优势" tabindex="-1"><a class="header-anchor" href="#_3-typescript-的优势" aria-hidden="true">#</a> 3. TypeScript 的优势？</h3><ol><li><strong>类型安全</strong>：在编译时发现错误</li><li><strong>更好的IDE支持</strong>：智能提示、自动补全</li><li><strong>代码可维护性</strong>：类型作为文档</li><li><strong>重构友好</strong>：类型检查确保重构安全</li><li><strong>更好的团队协作</strong>：清晰的接口定义</li></ol><h2 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型" aria-hidden="true">#</a> 基础类型</h2><h3 id="_4-typescript-的基本类型有哪些" tabindex="-1"><a class="header-anchor" href="#_4-typescript-的基本类型有哪些" aria-hidden="true">#</a> 4. TypeScript 的基本类型有哪些？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 原始类型
let name: string = &quot;张三&quot;;
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let uniqueId: symbol = Symbol(&quot;id&quot;);
let bigNumber: bigint = 100n;

// 数组
let numbers: number[] = [1, 2, 3];
let strings: Array&lt;string&gt; = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];

// 元组
let person: [string, number] = [&quot;张三&quot;, 25];

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
let obj: object = { name: &quot;张三&quot; };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-any-和-unknown-的区别" tabindex="-1"><a class="header-anchor" href="#_5-any-和-unknown-的区别" aria-hidden="true">#</a> 5. any 和 unknown 的区别？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// any：可以是任何值，绕过类型检查
let anything: any = 10;
anything.toUpperCase(); // 编译通过，运行时可能出错

// unknown：可以是任何值，但必须先检查类型
let value: unknown = 10;
if (typeof value === &quot;string&quot;) {
  value.toUpperCase(); // 编译通过
}
value.toFixed(); // 编译错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别</strong>：</p><ul><li><code>any</code> 绕过类型检查</li><li><code>unknown</code> 是类型安全的 <code>any</code>，必须先检查类型才能使用</li></ul><h3 id="_6-void-和-never-的区别" tabindex="-1"><a class="header-anchor" href="#_6-void-和-never-的区别" aria-hidden="true">#</a> 6. void 和 never 的区别？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// void：表示函数没有返回值
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别</strong>：</p><ul><li><code>void</code>：函数可以返回 <code>undefined</code></li><li><code>never</code>：函数永远不会返回</li></ul><h2 id="接口和类型别名" tabindex="-1"><a class="header-anchor" href="#接口和类型别名" aria-hidden="true">#</a> 接口和类型别名</h2><h3 id="_7-接口-interface-和类型别名-type-alias-的区别" tabindex="-1"><a class="header-anchor" href="#_7-接口-interface-和类型别名-type-alias-的区别" aria-hidden="true">#</a> 7. 接口（Interface）和类型别名（Type Alias）的区别？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 接口
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别</strong>：</p><ul><li>接口可以扩展（声明合并）</li><li>类型别名可以表示更复杂的类型（联合类型、交叉类型等）</li><li>接口只能表示对象类型</li><li>类型别名可以表示任何类型</li></ul><h3 id="_8-如何定义可选属性和只读属性" tabindex="-1"><a class="header-anchor" href="#_8-如何定义可选属性和只读属性" aria-hidden="true">#</a> 8. 如何定义可选属性和只读属性？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>interface Person {
  name: string;
  age?: number; // 可选属性
  readonly id: number; // 只读属性
}

const person: Person = {
  name: &quot;张三&quot;,
  id: 1
  // age 是可选的
};

// person.id = 2; // 错误：只读属性不能修改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="_9-如何定义函数类型" tabindex="-1"><a class="header-anchor" href="#_9-如何定义函数类型" aria-hidden="true">#</a> 9. 如何定义函数类型？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 方式1：函数声明
function add(a: number, b: number): number {
  return a + b;
}

// 方式2：函数表达式
const add: (a: number, b: number) =&gt; number = function(a, b) {
  return a + b;
};

// 方式3：箭头函数
const add = (a: number, b: number): number =&gt; {
  return a + b;
};

// 方式4：使用类型别名
type AddFunction = (a: number, b: number) =&gt; number;
const add: AddFunction = (a, b) =&gt; a + b;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-如何定义可选参数和默认参数" tabindex="-1"><a class="header-anchor" href="#_10-如何定义可选参数和默认参数" aria-hidden="true">#</a> 10. 如何定义可选参数和默认参数？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 可选参数
function greet(name: string, greeting?: string): string {
  return greeting ? \`\${greeting}, \${name}\` : \`Hello, \${name}\`;
}

// 默认参数
function greet(name: string, greeting: string = &quot;Hello&quot;): string {
  return \`\${greeting}, \${name}\`;
}

// 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) =&gt; a + b, 0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><h3 id="_11-什么是泛型-如何使用" tabindex="-1"><a class="header-anchor" href="#_11-什么是泛型-如何使用" aria-hidden="true">#</a> 11. 什么是泛型？如何使用？</h3><p>泛型允许我们在定义函数、接口或类时，不预先指定具体的类型，而在使用时再指定类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 泛型函数
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

const num = identity&lt;number&gt;(10);
const str = identity&lt;string&gt;(&quot;hello&quot;);

// 类型推断
const num = identity(10); // 自动推断为 number

// 泛型接口
interface Box&lt;T&gt; {
  value: T;
}

const box: Box&lt;number&gt; = { value: 10 };

// 泛型类
class Stack&lt;T&gt; {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const stack = new Stack&lt;number&gt;();
stack.push(1);
stack.push(2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-泛型约束" tabindex="-1"><a class="header-anchor" href="#_12-泛型约束" aria-hidden="true">#</a> 12. 泛型约束</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 约束泛型必须有 length 属性
interface Lengthwise {
  length: number;
}

function logLength&lt;T extends Lengthwise&gt;(arg: T): void {
  console.log(arg.length);
}

logLength(&quot;hello&quot;); // OK
logLength([1, 2, 3]); // OK
logLength(10); // 错误：number 没有 length 属性

// 使用 keyof 约束
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: &quot;张三&quot;, age: 25 };
const name = getProperty(person, &quot;name&quot;); // string
const age = getProperty(person, &quot;age&quot;); // number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级类型" tabindex="-1"><a class="header-anchor" href="#高级类型" aria-hidden="true">#</a> 高级类型</h2><h3 id="_13-联合类型和交叉类型" tabindex="-1"><a class="header-anchor" href="#_13-联合类型和交叉类型" aria-hidden="true">#</a> 13. 联合类型和交叉类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 联合类型
type ID = number | string;

function printId(id: ID): void {
  if (typeof id === &quot;string&quot;) {
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

type PersonEmployee = Person &amp; Employee;

const personEmployee: PersonEmployee = {
  name: &quot;张三&quot;,
  id: 1
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-类型守卫" tabindex="-1"><a class="header-anchor" href="#_14-类型守卫" aria-hidden="true">#</a> 14. 类型守卫</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// typeof 类型守卫
function printId(id: string | number): void {
  if (typeof id === &quot;string&quot;) {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// instanceof 类型守卫
class Dog {
  bark(): void {
    console.log(&quot;汪汪&quot;);
  }
}

class Cat {
  meow(): void {
    console.log(&quot;喵喵&quot;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-条件类型" tabindex="-1"><a class="header-anchor" href="#_15-条件类型" aria-hidden="true">#</a> 15. 条件类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 基本语法
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

type T1 = NonNullable&lt;string | null&gt;; // string
type T2 = NonNullable&lt;number | undefined&gt;; // number

// 分布式条件类型
type ToArray&lt;T&gt; = T extends any ? T[] : never;

type T3 = ToArray&lt;string&gt;; // string[]
type T4 = ToArray&lt;string | number&gt;; // string[] | number[]

// 条件类型推断
type ReturnType&lt;T&gt; = T extends (...args: any[]) =&gt; infer R ? R : never;

function fn(): string {
  return &quot;hello&quot;;
}

type T5 = ReturnType&lt;typeof fn&gt;; // string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-映射类型" tabindex="-1"><a class="header-anchor" href="#_16-映射类型" aria-hidden="true">#</a> 16. 映射类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 基本映射类型
type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly&lt;Person&gt;; // 所有属性只读
type PartialPerson = Partial&lt;Person&gt;; // 所有属性可选

// 映射修饰符
type Mutable&lt;T&gt; = {
  -readonly [P in keyof T]: T[P];
};

type Required&lt;T&gt; = {
  [P in keyof T]-?: T[P];
};

// 键重映射
type Getters&lt;T&gt; = {
  [P in keyof T as \`get\${Capitalize&lt;string &amp; P&gt;}\`]: () =&gt; T[P];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters&lt;Person&gt;;
// {
//   getName: () =&gt; string;
//   getAge: () =&gt; number;
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-模板字面量类型" tabindex="-1"><a class="header-anchor" href="#_17-模板字面量类型" aria-hidden="true">#</a> 17. 模板字面量类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 基本用法
type EventName&lt;T extends string&gt; = \`on\${Capitalize&lt;T&gt;}\`;

type T1 = EventName&lt;&quot;click&quot;&gt;; // &quot;onClick&quot;
type T2 = EventName&lt;&quot;focus&quot;&gt;; // &quot;onFocus&quot;

// 字符串联合类型
type Color = &quot;red&quot; | &quot;blue&quot; | &quot;green&quot;;
type Quantity = &quot;light&quot; | &quot;dark&quot;;

type ColorName = \`\${Quantity | &quot;&quot;}\${Capitalize&lt;Color&gt;}\`;
// &quot;lightRed&quot; | &quot;darkRed&quot; | &quot;Red&quot; | &quot;lightBlue&quot; | &quot;darkBlue&quot; | &quot;Blue&quot; | ...

// 字符串操作类型
type Trim&lt;S extends string&gt; = S extends \` \${infer T}\` | \`\${infer T} \`
  ? Trim&lt;T&gt;
  : S;

type T3 = Trim&lt;&quot;  hello  &quot;&gt;; // &quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h2><h3 id="_18-什么是类型推断" tabindex="-1"><a class="header-anchor" href="#_18-什么是类型推断" aria-hidden="true">#</a> 18. 什么是类型推断？</h3><p>TypeScript 会根据上下文自动推断变量的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 变量推断
let name = &quot;张三&quot;; // 推断为 string
let age = 25; // 推断为 number

// 函数返回值推断
function add(a: number, b: number) {
  return a + b; // 推断返回类型为 number
}

// 最佳通用类型推断
let arr = [0, 1, null]; // 推断为 (number | null)[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-类型断言" tabindex="-1"><a class="header-anchor" href="#_19-类型断言" aria-hidden="true">#</a> 19. 类型断言</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 方式1：尖括号语法
let value: any = &quot;hello&quot;;
let length: number = (&lt;string&gt;value).length;

// 方式2：as 语法（推荐）
let value: any = &quot;hello&quot;;
let length: number = (value as string).length;

// 非空断言
function printName(name: string | null): void {
  console.log(name!.toUpperCase()); // 断言 name 不为 null
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><h3 id="_20-什么是装饰器" tabindex="-1"><a class="header-anchor" href="#_20-什么是装饰器" aria-hidden="true">#</a> 20. 什么是装饰器？</h3><p>装饰器是一种特殊的声明，可以附加到类、方法、属性或参数上，用于修改它们的行为。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 类装饰器
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
    console.log(\`Calling \${key} with\`, args);
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
  const getter = () =&gt; value;
  const setter = (newValue: string) =&gt; {
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
  console.log(\`Parameter at index \${index} in \${key} is required\`);
}

class User {
  greet(@required name: string): void {
    console.log(\`Hello, \${name}\`);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><h3 id="_21-什么是类型声明文件" tabindex="-1"><a class="header-anchor" href="#_21-什么是类型声明文件" aria-hidden="true">#</a> 21. 什么是类型声明文件？</h3><p>类型声明文件（<code>.d.ts</code>）用于为JavaScript库提供类型信息。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 声明全局变量
declare const jQuery: (selector: string) =&gt; any;

// 声明全局函数
declare function greet(name: string): void;

// 声明全局类
declare class Person {
  constructor(name: string);
  name: string;
  greet(): void;
}

// 声明模块
declare module &quot;my-library&quot; {
  export function foo(): string;
  export const bar: number;
}

// 声明文件
// @types/my-library/index.d.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_22-如何为第三方库添加类型" tabindex="-1"><a class="header-anchor" href="#_22-如何为第三方库添加类型" aria-hidden="true">#</a> 22. 如何为第三方库添加类型？</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 方式1：使用 @types 包
npm install @types/lodash

// 方式2：创建类型声明文件
// src/types/lodash.d.ts
declare module &quot;lodash&quot; {
  export function map&lt;T, U&gt;(array: T[], iteratee: (value: T) =&gt; U): U[];
  export function filter&lt;T&gt;(array: T[], predicate: (value: T) =&gt; boolean): T[];
}

// 方式3：使用 declare module
declare module &quot;my-untyped-library&quot; {
  export const someFunction: (arg: string) =&gt; number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="_23-tsconfig-json-常用配置" tabindex="-1"><a class="header-anchor" href="#_23-tsconfig-json-常用配置" aria-hidden="true">#</a> 23. tsconfig.json 常用配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;ES2020&quot;, // 编译目标
    &quot;module&quot;: &quot;ESNext&quot;, // 模块系统
    &quot;lib&quot;: [&quot;ES2020&quot;, &quot;DOM&quot;], // 包含的库
    &quot;outDir&quot;: &quot;./dist&quot;, // 输出目录
    &quot;rootDir&quot;: &quot;./src&quot;, // 根目录
    &quot;strict&quot;: true, // 启用严格模式
    &quot;esModuleInterop&quot;: true, // ES模块互操作
    &quot;skipLibCheck&quot;: true, // 跳过库文件检查
    &quot;forceConsistentCasingInFileNames&quot;: true, // 强制文件名大小写一致
    &quot;resolveJsonModule&quot;: true, // 解析JSON模块
    &quot;moduleResolution&quot;: &quot;node&quot;, // 模块解析策略
    &quot;allowJs&quot;: true, // 允许JS文件
    &quot;checkJs&quot;: true, // 检查JS文件
    &quot;jsx&quot;: &quot;react&quot;, // JSX支持
    &quot;declaration&quot;: true, // 生成声明文件
    &quot;declarationMap&quot;: true, // 生成声明文件映射
    &quot;sourceMap&quot;: true, // 生成源映射
    &quot;noUnusedLocals&quot;: true, // 检查未使用的局部变量
    &quot;noUnusedParameters&quot;: true, // 检查未使用的参数
    &quot;noImplicitReturns&quot;: true, // 检查隐式返回
    &quot;noFallthroughCasesInSwitch&quot;: true, // 检查switch穿透
    &quot;allowSyntheticDefaultImports&quot;: true, // 允许合成默认导入
    &quot;experimentalDecorators&quot;: true, // 启用装饰器
    &quot;emitDecoratorMetadata&quot;: true // 启用装饰器元数据
  },
  &quot;include&quot;: [&quot;src/**/*&quot;],
  &quot;exclude&quot;: [&quot;node_modules&quot;, &quot;dist&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年高频考点" tabindex="-1"><a class="header-anchor" href="#_2025年高频考点" aria-hidden="true">#</a> 2025年高频考点</h2><h3 id="_24-类型体操" tabindex="-1"><a class="header-anchor" href="#_24-类型体操" aria-hidden="true">#</a> 24. 类型体操</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 实现一个简单的类型体操
type MyPick&lt;T, K extends keyof T&gt; = {
  [P in K]: T[P];
};

type MyOmit&lt;T, K extends keyof T&gt; = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type MyRecord&lt;K extends keyof any, T&gt; = {
  [P in K]: T;
};

type MyPartial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

type MyRequired&lt;T&gt; = {
  [P in keyof T]-?: T[P];
};

type MyReadonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-工具类型" tabindex="-1"><a class="header-anchor" href="#_25-工具类型" aria-hidden="true">#</a> 25. 工具类型</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// Partial：所有属性可选
type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

// Required：所有属性必需
type Required&lt;T&gt; = {
  [P in keyof T]-?: T[P];
};

// Readonly：所有属性只读
type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

// Record：创建对象类型
type Record&lt;K extends keyof any, T&gt; = {
  [P in K]: T;
};

// Pick：选取部分属性
type Pick&lt;T, K extends keyof T&gt; = {
  [P in K]: T[P];
};

// Omit：排除部分属性
type Omit&lt;T, K extends keyof T&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;;

// Exclude：排除联合类型中的某些类型
type Exclude&lt;T, U&gt; = T extends U ? never : T;

// Extract：提取联合类型中的某些类型
type Extract&lt;T, U&gt; = T extends U ? T : never;

// NonNullable：排除 null 和 undefined
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

// ReturnType：获取函数返回值类型
type ReturnType&lt;T extends (...args: any[]) =&gt; any&gt; = T extends (...args: any[]) =&gt; infer R ? R : any;

// Parameters：获取函数参数类型
type Parameters&lt;T extends (...args: any[]) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_26-类型推导" tabindex="-1"><a class="header-anchor" href="#_26-类型推导" aria-hidden="true">#</a> 26. 类型推导</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// 推导数组元素类型
type ElementType&lt;T extends any[]&gt; = T extends (infer U)[] ? U : never;

type T1 = ElementType&lt;[string, number]&gt;; // string | number

// 推导函数参数类型
type FirstParameter&lt;T extends (...args: any[]) =&gt; any&gt; = T extends (arg: infer P, ...args: any[]) =&gt; any ? P : never;

function fn(name: string, age: number): void {}

type T2 = FirstParameter&lt;typeof fn&gt;; // string

// 推导Promise返回值类型
type UnwrapPromise&lt;T&gt; = T extends Promise&lt;infer U&gt; ? U : T;

type T3 = UnwrapPromise&lt;Promise&lt;string&gt;&gt;; // string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="_27-typescript-最佳实践" tabindex="-1"><a class="header-anchor" href="#_27-typescript-最佳实践" aria-hidden="true">#</a> 27. TypeScript 最佳实践</h3><ol><li><strong>启用严格模式</strong>：在 <code>tsconfig.json</code> 中设置 <code>&quot;strict&quot;: true</code></li><li><strong>避免使用 any</strong>：使用 <code>unknown</code> 替代</li><li><strong>使用类型守卫</strong>：而不是类型断言</li><li><strong>优先使用接口</strong>：对于对象类型</li><li><strong>使用类型别名</strong>：对于联合类型、交叉类型等</li><li><strong>使用泛型</strong>：提高代码复用性</li><li><strong>编写类型声明文件</strong>：为第三方库添加类型</li><li><strong>使用工具类型</strong>：简化类型定义</li><li><strong>保持类型简洁</strong>：避免过度复杂的类型</li><li><strong>定期更新TypeScript</strong>：使用最新特性</li></ol><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_28-如何解决类型错误" tabindex="-1"><a class="header-anchor" href="#_28-如何解决类型错误" aria-hidden="true">#</a> 28. 如何解决类型错误？</h3><ol><li><strong>检查类型定义</strong>：确保类型定义正确</li><li><strong>使用类型守卫</strong>：缩小类型范围</li><li><strong>使用类型断言</strong>：谨慎使用</li><li><strong>使用 <code>as const</code></strong>：创建只读字面量类型</li><li><strong>使用 <code>satisfies</code></strong>：验证类型但不改变类型</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>// satisfies 操作符
type Colors = Record&lt;string, string | { r: number; g: number; b: number }&gt;;

const theme = {
  primary: &quot;red&quot;,
  secondary: { r: 0, g: 255, b: 0 }
} satisfies Colors;

// theme.primary 仍然是 string，而不是 Record&lt;string, string | {...}&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_29-如何处理第三方库的类型问题" tabindex="-1"><a class="header-anchor" href="#_29-如何处理第三方库的类型问题" aria-hidden="true">#</a> 29. 如何处理第三方库的类型问题？</h3><ol><li><strong>查找 @types 包</strong>：<code>npm install @types/library-name</code></li><li><strong>创建类型声明文件</strong>：在 <code>src/types</code> 目录下创建 <code>.d.ts</code> 文件</li><li><strong>使用 declare module</strong>：为未类型化的模块添加类型</li><li><strong>使用 any</strong>：临时解决方案（不推荐）</li><li><strong>提交 PR</strong>：为开源项目贡献类型定义</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>TypeScript 是现代前端开发的重要工具，它通过静态类型检查提高了代码的可靠性和可维护性。掌握 TypeScript 的核心概念和高级特性，能够帮助开发者编写更安全、更高效的代码。</p><p><strong>学习建议</strong>：</p><ol><li>从基础类型开始，逐步学习高级类型</li><li>多实践，在实际项目中应用 TypeScript</li><li>阅读官方文档和最佳实践</li><li>关注 TypeScript 的最新发展</li></ol><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><p><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">TypeScript 官方文档</a><a href="https://jkchao.github.io/typescript-book-chinese/" target="_blank" rel="noopener noreferrer">TypeScript 深入理解</a><a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noopener noreferrer">TypeScript 类型体操</a></p>`,93)])])}const u=n(l,[["render",r],["__file","前端面试系列-TypeScript篇.html.vue"]]);export{u as default};
