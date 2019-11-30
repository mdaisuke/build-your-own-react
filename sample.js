function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children,
        },
    }
}

var a = createElement("div");
var b = createElement("div");
console.log(createElement("div"));
console.log(createElement("div", null, a));
console.log(createElement("div", null, a, b));