(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{196:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"es6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),e("h2",{attrs:{id:"let-const"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let-const","aria-hidden":"true"}},[t._v("#")]),t._v(" let, const")]),t._v(" "),e("p",[t._v("let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let name = 'zach'\n\nwhile (true) {\n    let name = 'obama'\n    console.log(name)  //obama\n    break\n}\n\nconsole.log(name)  //zach\n")])])]),e("p",[t._v("const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。"),e("br"),t._v("\n当我们尝试去改变用const声明的常量时，浏览器就会报错。"),e("br"),t._v("\nconst有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const monent = require('moment')\n")])])]),e("h2",{attrs:{id:"class-extends-super"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-extends-super","aria-hidden":"true"}},[t._v("#")]),t._v(" class, extends, super")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Animal {\n    constructor(){\n        this.type = 'animal'\n    }\n    says(say){\n        console.log(this.type + ' says ' + say)\n    }\n}\n\nlet animal = new Animal()\nanimal.says('hello') //animal says hello\n\nclass Cat extends Animal {\n    constructor(){\n        super()\n        this.type = 'cat'\n    }\n}\n\nlet cat = new Cat()\ncat.says('hello') //cat says hello\n")])])]),e("p",[t._v("上面代码首先用class定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。")]),t._v(" "),e("p",[t._v("Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。上面定义了一个Cat类，该类通过extends关键字，继承了Animal类的所有属性和方法。")]),t._v(" "),e("p",[t._v("super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。")]),t._v(" "),e("p",[t._v("ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。")]),t._v(" "),e("p",[t._v("P.S 如果你写react的话，就会发现以上三个东西在最新版React中出现得很多。创建的每个component都是一个继承React.Component的类。")]),t._v(" "),e("h2",{attrs:{id:"arrow-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arrow-function","aria-hidden":"true"}},[t._v("#")]),t._v(" arrow function")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function(i){ return i + 1; } //ES5\n(i) => i + 1 //ES6\n----------------------------------\nfunction(x, y) { \n    x++;\n    y--;\n    return x + y;\n}\n(x, y) => {x++; y--; return x+y}\n")])])]),e("p",[t._v("当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。"),e("br"),t._v("\n并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。")]),t._v(" "),e("h2",{attrs:{id:"destructuring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destructuring","aria-hidden":"true"}},[t._v("#")]),t._v(" destructuring")]),t._v(" "),e("p",[t._v("更多参考点"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",target:"_blank"}},[t._v("这里")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("es5:\net cat = 'ken'\nlet dog = 'lili'\nlet zoo = {cat: cat, dog: dog}\nconsole.log(zoo)  //Object {cat: \"ken\", dog: \"lili\"}\n\nes6:\nlet cat = 'ken'\nlet dog = 'lili'\nlet zoo = {cat, dog}\nconsole.log(zoo)  //Object {cat: \"ken\", dog: \"lili\"}\n----------------------------------\nlet dog = {type: 'animal', many: 2}\nlet { type, many} = dog\nconsole.log(type, many)   //animal 2\n")])])]),e("h2",{attrs:{id:"default-rest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-rest","aria-hidden":"true"}},[t._v("#")]),t._v(" default, rest")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("es5:\nfunction animal(type){\n    type = type || 'cat'  \n    console.log(type)\n}\nanimal()\n\nes6:\nfunction animal(type = 'cat'){\n    console.log(type)\n}\nanimal()\n----------------------------------\nfunction animals(...types){\n    console.log(types)\n}\nanimals('cat', 'dog', 'fish') //[\"cat\", \"dog\", \"fish\"]\n")])])]),e("h2",{attrs:{id:"import-export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-export","aria-hidden":"true"}},[t._v("#")]),t._v(" import export")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//index.js\nimport animal from './content'\n\n//content.js\nexport default 'A cat'\n---------------------------------\nexport default 'A cat'    \nexport function say(){\n    return 'Hello!'\n}    \nexport const type = 'dog' \n---------------------------------\nimport animal, { say, type } from './content'  \nlet says = say()\nconsole.log(`The ${type} says ${says} to ${animal}`)  \n//The dog says Hello to A cat\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);