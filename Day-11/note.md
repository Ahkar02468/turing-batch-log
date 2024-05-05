### Object Query

```js
     address = {
          no: 1,
          city: "Yangon",
          street: "name something"
     }

     //to access the properties that is not sure exit. only in ES2020

     let address = obj?.house_no?.name;
```

* should use for-in loop to enumarate the props of an obj
* Extend object make shadow copy of one obj to another obj. Can also used rest/spread operator.

> learn shallow and deep clone

* toJSON() can be used to return only required props of an object.

```js
     obj = {
          name: "ahkar",
          address: "yangon"
          secret: "soemthing"
          toJSON(){
               return {
                    name: this.name,
                    address: this.address
               }
          }
     }
```

* Can use getter/setter in an object. Getter as compute return and setter as encapsulated data.

## Array

* Variables is to store single value but array is for multiple values.
* Array is in orderd collection like 0,1,2,3,4,....
* Each value of an array is called an element.
* Shouldn't use *__let arr = new Array(2);__*
* Assume not positive interger and srting like values are considered as props.
