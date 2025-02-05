class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        return `Hello from ${this.name}!`;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    bark() {
        return `${this.name} says WOOF!`
    }
}


