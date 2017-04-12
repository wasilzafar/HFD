/**
 * @credit http://www.smccd.net/accounts/hasson/C++2Notes/ArithmeticParsing.html
 *MIT license
 *Copyright (C) 2015 Miguel Mota
 *Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function(root) {
  'use strict';

  function infixToPostfix(expression) {
    if (typeof expression !== 'string') {
      if (expression instanceof String) {
        expression = expression.toString();
      } else {
        return null;
      }
    }

    var result = '';
    var stack = [];
    var operators = ['*','/','+','-'];
    var tokens = expression.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*/]/gi);
    var containsInvalidChars = /[^()+\-*/0-9.\s]/gi.test(expression);

    if (Array.isArray(tokens) && !containsInvalidChars) {
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (operators.indexOf(token) > -1) {
          while (stack.length && operators.indexOf(stack[stack.length-1]) > -1) {
            var operator = stack.pop();
            result += (' ' + operator);
          }

          stack.push(token);
        } else if (token === '(') {
          stack.push(token);
        } else if (token === ')') {
          var item = stack.pop();

          while (item !== '(') {
            result += (' ' + item);
            item = stack.pop();
          }
        } else if (token) {
          result += (' ' + token);
        }
      }
    }

    while (stack.length) {
      var item = stack.pop();
      result += (' ' + item);
    }

    result = result.trim();

    return (result.length >= 1 ? result : null);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = infixToPostfix;
    }
    exports.infixToPostfix = infixToPostfix;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return infixToPostfix;
    });
  } else {
    root.infixToPostfix = infixToPostfix;
  }

})(this);
