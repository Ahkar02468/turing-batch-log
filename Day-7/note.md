# Day 7

## Comparison 

number is priority

> null == undefine and != 0(edge cases)

> string, number -> (change string to number) == number

```js
console.log("true == '1', true == '1'")
//boolean +true == '1'
//1 == '1'
//1 == 1(string to number)
//so the output is true
```

> string comparison : lexicographical order (means alphabatically)

### Logical AND &&

> *__input/ouput of && sementic wil be anything__* mean not only boolean but also numer or something.

In && logic, if LHS is falsy, return LHS.
Else if, LHS is truthy, return RHS.

* false && false = false
* false && true = false
* true && false = false
* true && true = true

### Logical OR ||

if LHS is false, return RHS.
Else if, LHS is true, return LHS.

* false || false = false
* false || true = true
* true || false = true
* true || true = true
