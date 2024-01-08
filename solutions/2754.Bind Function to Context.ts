interface Function {
  bindPolyfill(ctx): Function
}
Function.prototype.bindPolyfill = function (ctx) {
  const self = this;
  const $O = Object.create(ctx);
  const s = Symbol();
  return function (...args) {
    $O[s] = self;
    $O[s](...args);
  }
 /*  return function (...args) {
    let s = Symbol();
    ctx[s] = self;
    ctx[s](...args);
    delete ctx[s];
  } */
}


function f() {
  console.log('My context is ' + this.ctx);
}
const boundFunc = f.bindPolyfill({ "ctx": "My Object" })
boundFunc();