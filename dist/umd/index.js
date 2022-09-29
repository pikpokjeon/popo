(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Popo = {}));
})(this, (function (exports) { 'use strict';

    const id = id => document.getElementById(id);

    const name = name => document.getElementsByName(name);
    const el$1 = {
      id,
      name
    };
    const typeOf = ['number', 'function', 'string', 'undefined', "symbol", "object"];
    const initType = {
      array: d => Array.isArray(d),
      null: d => d === null,
      svg: svg => svg instanceof SVGElement,
      // svg == false
      html: el => /<\/?[a-z][\s\S]*>/i.test(el)
    }; // true
    // const a = is['array']( [2, 3, 4, 5,] )

    const is = typeOf.reduce((typeObj, type) => Object.assign(typeObj, {
      [type]: d => typeof d === type
    }), { ...initType
    });
    const isChildren = data => is['array'](data) || is['string'](data) || 'nodeName' in data;

    const setAttrs = (el, attrs = {}) => {
      return Object.entries(attrs).reduce((acc, [key, val]) => {
        if (key === 'text') {
          acc.appendChild(document.createTextNode(val));
        } else acc.setAttribute(key, val);

        return acc;
      }, el);
    };
    const setAttr = (type, el, attr) => {
      // const attributes = Object.entries( attr )
      // if ( is['array']( attributes ) )
      // {
      //     return attributes.reduce( ( acc, [key, val] ) =>
      //     {
      //     },el )    
      // }
      // return el
      return setAttrs(el, attr);
    };
    const appendTo = parent => {
      if (is['undefined'](parent)) return console.log('NO PARENT');
      return {
        child: node => {
          if (!is['array'](node)) node = [node];
          node.reduce((acc, cur) => {
            acc.appendChild(cur);
            return acc;
          }, parent);
          return parent;
        }
      };
    };
    const updateChildren = (type, parent, children = []) => {
      // if ( is['undefined']( children ) ) return parent
      // if ( !is['array']( children ) ) children = [children]
      // children.reduce( ( acc, cur ) =>
      // {
      //     acc.appendChild( cur )
      //     return acc
      // }, parent )
      // return parent
      // TODO: type 필요한가
      return appendTo(parent).child(children);
    };
    const createElement = type => (tag, attr = {}, children = []) => {
      const el = type === 'svg' ? document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag);

      if (isChildren(attr)) {
        updateChildren(type, el, children);
        return el;
      }

      setAttr(type, el, attr);
      updateChildren(type, el, children);
      return el;
    };
    const element = type => tag => (attr = {}, children = []) => {
      const elByType = createElement(type);
      return isChildren(attr) ? elByType(tag, {}, attr) : elByType(tag, attr, children);
    };
    const fragment = children => appendTo(document.createDocumentFragment()).child(children);
    const renderTo = (target, children = []) => {
      const root = el.id(target);
      root.innerHTML = '';
      updateChildren('', root, children);
    };

    const Popo = {
      el: el$1,
      is,
      element,
      fragment,
      setAttrs,
      appendTo,
      renderTo
    };

    exports.Popo = Popo;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
