//https://www.codewars.com/kata/singleton-pattern

const Singleton = function () {
  if (!Singleton._instance) {
    Singleton._instance = this;
  }
  return Singleton._instance;
};

//https://www.codewars.com/kata/588a00ad70720f2cd9000005

class Router {
  constructor() {
    this.map = new Map();
  }

  bind(url, method, fn) {
    this.map.set(url + method, fn);
  }
  runRequest(url, method) {
    if (this.map.has(url + method)) {
      return this.map.get(url + method).call();
    }
    return "Error 404: Not Found";
  }
}

