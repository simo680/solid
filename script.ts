// Принцип единственной ответственности

class Order {
  private items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
}

class Item {
  constructor(public name: string, public price: number) {}
}

// Принцип открытости/закрытости

interface Shape {
  area(): number;
}

class Square implements Shape {
  constructor(public sideLength: number) {}

  area(): number {
    return this.sideLength ** 2;
  }
}

class Triangle implements Shape {
  constructor(public base: number, public height: number) {}

  area(): number {
    return 0.5 * this.base * this.height;
  }
}

// Принцип подстановки Барбары Лисков

abstract class Vehicle {
  abstract startEngine(): void;
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
}

class ElectricCar extends Car {}

// Принцип разделения интерфейса

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class AllInOnePrinter implements Printer, Scanner {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}

class RegularPrinter implements Printer {
  print(): void {
    console.log("Printing...");
  }
}

// Принцип инверсии зависимостей

interface MessageSender {
  send(message: string): void;
}

class EmailSender implements MessageSender {
  send(message: string): void {
    console.log("Sending email:", message);
  }
}

class SMSManager {
  private messageSender: MessageSender;

  constructor(messageSender: MessageSender) {
    this.messageSender = messageSender;
  }

  sendMessage(message: string): void {
    this.messageSender.send(message);
  }
}