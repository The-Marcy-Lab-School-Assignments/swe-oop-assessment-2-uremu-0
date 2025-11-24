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

Encapsulation refers to building data and methods that operate on it into a single object. It also protects data by controlling access and making data private. 
This concept is beneficial when programming because it allows the programmer to hide data, preventing outside code from changing it directly.

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

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

  The `this` keyword refers to the current object in the context where a piece of code is executed, and it is often used in object methods. 
  The `this` keyword is useful because it helps define and point to a specific object.

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

In the snippet, the `this` value is different in each context. The `this` keyword in "this.count = 0" refers to the instance counterA, and the `this` keyword in "this.count++" refers to the instance counterB.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

Polymorphism is when a child or sub class replaces or overrides a parent method. It allows a sub class or a child class to provide a specialized behavior in code. It creates different outputs a while having the same function as the base.

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

I would first create a class called "DigitalPets" as the parent class. I would then make a contructor that incorporates a `name`, `energy` level, and `happiness` level, and also can all `sleep` in the parent class. I would then create a sub class for Cats, Dogs, and Birds, Then I would write a "super()" keyword for each subclass. Super() calls the parent’s class constructor, allowing the child class to inherit and correctly set up properties defined in the parent class "DigitalPets." I would then add each subclass's unique ability within the subclass. 

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.



## Response 4