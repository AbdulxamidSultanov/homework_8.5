"use strict";
class LibraryItem {
  constructor(id, title) {
    this.isBorrowed = false;
    this.id = id;
    this.title = title;
  }
  borrow() {
    if (this.isBorrowed != true) {
      this.isBorrowed = true;
      console.log("Kitob muofaqiyatlik qarzga olindi!");
    } else {
      console.log("Hatolik! Siz bu kitobni oldin qarzga olgansiz");
    }
  }
  returnItem() {
    if (this.isBorrowed === true) {
      this.isBorrowed = false;
      console.log(`Siz ${this.title} nomli kitobni qaytardingiz`);
    } else {
      console.log("Siz kitobni qaytargansz yoki hali qarzga olinmaga");
    }
  }
  getDetails() {
    return `Kitob nomi ${this.title}\nKitob holat: ${
      this.isBorrowed === true ? "Bosh" : "Bant"
    }`;
  }
  getId() {
    return this.id;
  }
}
class Book extends LibraryItem {
  constructor(id, title, author, pages) {
    super(id, title);
    this.author = author;
    this.pages = pages;
  }
  getDetails() {
    return `Kitob muallifi ${this.author} va kitob betlar soni ${this.pages}`;
  }
}
class Magazine extends LibraryItem {
  constructor(id, title, month, year) {
    super(id, title);
    this.month = month;
    this.year = year;
  }
  getDetails() {
    return `Jurnal ${this.year} yil ${this.month} oyda nashr qilingan`;
  }
}
class DVD extends LibraryItem {
  constructor(id, title, duration, genre) {
    super(id, title);
    this.duration = duration;
    this.genre = genre;
  }
  getDetails() {
    let durationHour = Math.floor(this.duration / 3600);
    let durationMinute = Math.floor((this.duration % 3600) / 60);
    let durationSeconds = this.duration % 60;
    let DurationSuper = `${durationHour}:${
      durationMinute.toString().split("").length == 1
        ? `0${durationMinute}`
        : durationMinute
    }:${durationSeconds}`;
    return `Davomiyligi: ${DurationSuper}\nJanr: ${this.genre}`;
  }
}
const book1 = new Book(1, "Sherlock Holms", "Konan Doyl", 396);
const book2 = new Book(2, "Sherlock Holms", "Konan Doyl", 396);
const book3 = new Book(3, "Sherlock Holms", "Konan Doyl", 396);
const magazine1 = new Magazine(1, "BMW", 5, 2025);
const magazine2 = new Magazine(1, "Audi", "Mart", 2025);
const magazine3 = new Magazine(1, "Merceds-Bens", 1, 2025);
const DVD1 = new DVD(1, "Джон Уик", 32405, "Боевик");
const DVD2 = new DVD(2, "Джон Уик 2", 35055, "Боевик");
const DVD3 = new DVD(3, "Джон Уик 3", 33555, "Боевик");
console.log(book1.getDetails());
console.log(book2.getDetails());
console.log(book3.getDetails());
console.log(magazine1.getDetails());
console.log(magazine2.getDetails());
console.log(magazine3.getDetails());
console.log(DVD1.getDetails());
console.log(DVD2.getDetails());
console.log(DVD3.getDetails());
