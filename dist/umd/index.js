(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Popo = {}));
})(this, (function (exports) { 'use strict';

    const id = id => document.getElementById(id);

    const name = name => document.getElementsByName(name);
    const el = {
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
    const iterate = ({
      length,
      startIdx
    }) => Array.from(Array(length).fill(startIdx)).map((idx, i) => idx + i);

    const setAttrs = (el, attrs = {}) => {
      return Object.entries(attrs).reduce((acc, [key, val]) => {
        if (key === 'text') {
          const textElem = document.createTextNode(val);
          console.log(textElem);
          acc.appendChild(textElem);
          return acc;
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

      const child = node => {
        if (!is['array'](node)) node = [node];
        return Array.from(node).reduce((acc, cur) => {
          acc.appendChild(cur);
          return acc;
        }, parent);
      };

      return {
        child
      };
    };
    const updateChildren = (type, parent, children = []) => appendTo(parent).child(children);
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

    const setToCreate = (con, tag, attr, children) => isChildren(attr) ? con(tag, {}, attr) : con(tag, attr, children);

    const element = type => (tag, initAttrs, initChildrend) => (attr = {}, children = []) => {
      let createTypeElem = createElement(type); //setType

      const initialAttributes = Object.assign({}, { ...initAttrs
      });

      if (attr) {
        return isChildren(attr) ? createTypeElem(tag, {}, attr) : createTypeElem(tag, Object.assign(initialAttributes, { ...attr
        }), children);
      }

      return isChildren(initAttrs) ? setToCreate(createTypeElem, tag, {}, initAttrs) : setToCreate(createTypeElem, tag, initialAttributes, initChildrend);
    };
    const fragment = children => appendTo(document.createDocumentFragment()).child(children);

    const Popo = {
      el,
      is,
      element,
      fragment,
      setAttrs,
      iterate
    };

    exports.Popo = Popo;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
