# Section 1 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

Encapsulation refers to bundling or grouping data and the methods that operate on that data into a single object. It also protects that data by controlling access—typically by making certain values private. This restricted access means that outside code cannot directly modify internal data; instead, it must interact through a class (or object) interface that exposes only the intended behaviors.

Provide a code snippet to illustrate _encapsulation_.

## Response 2

```js
function createAnimal(name) {
  let score = 0; // private

  return {
    getDescription() {
      return name;
    },
    addScore() {
      score++;
    },
    getScore() {
      return score;
    }
  };
}

const user = createAnimal("Dog");
user.addScore();
console.log(user.getScore()); // 1
console.log(user.score); // undefined -> protected
```
This code snippet demonstrates encapsulation by grouping the data (name and score) with the methods that operate on it. The variable score is private and cannot be accessed directly from outside the object. Instead, the object provides a controlled interface—addScore() and getScore()—which is the only way to interact with that internal data. This protects the integrity of the data and illustrates how encapsulation restricts access while still allowing meaningful interaction through defined methods.
---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

  The `this` keyword refers to the current object in the context where a piece of code is executed, and it is often used in object methods. The `this` keyword is useful because it helps define and point to a specific object.

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

In the code snippet this will point to a different class instance depending on which class invokes the class constructor and methods.
When counterA.increment() is invoked this will point to counterA.
When counterB.increment() is invoked this will point to counterB.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

Polymorphism is when many objects share the same interface, but this same interface can be implemented differently in each object.
For example, Polymorphism is when a child or sub class replaces or overrides a parent method. It allows a sub class or a child class to provide a specialized behavior in code. It creates different outputs a while having the same function as the base.

```js 
class Food {
  description() {
    console.log("The food taste is so delicious.");
  }
}

class Cake extends Food {
  description() {
    console.log("So sweet!");
  }
}

const a = new Food();
const d = new Cake();

a.description(); // Food taste etc.
d.description(); // So sweet (overridden)
```




---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

I would start by creating a parent class called `DigitalPets` In its constructor, I’d include properties such as `name`, `energy`, and `happiness`. I’d also define a method like `sleep` in the parent class, since all digital pets can sleep.

Next, I’d create subclasses for `Cats`, `Dogs`, and `Birds`. In each subclass, I would use the `super()` keyword in the constructor to call the parent class’s constructor, ensuring that the base properties (`name`, `energy`, and `happiness`) are set up correctly. Then, I’d add unique methods for each subclass, such as `chase` for `cats`, `hunt` for `dogs`, and `fly` for `birds`, to represent behaviors specific to each type of pet.

This approach uses inheritance to share common features among all pets, while allowing for specialized behaviors in each subclass.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.


## Response 4

This is beneficial because inheritance follows the Don't Repeat Yourself Principle (DRY), which allows code to be reused instead of redeclared and shows inheritance through the usage of the extends keyword in its declaration, which allows the subclasses of `Cats`, `Dogs`, and `Birds` to use all the properties and methods of `Digital Pets`.
