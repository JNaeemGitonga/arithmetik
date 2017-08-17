# Arithmetic

### About
#### This is one of my first contributions to the opensource community that I have undertaken to learn how to create an NPM package. It is experimental and is used to build skills in learning a new technology. This package will allow users to perform basic arithmatic and algebra processes with minimal code. ENJOY!



### 1. Four methods.  

•addition – will add all the values of an array of numbers and give you its total.  

•multiply- will multiply all the numbers of an array and give you its product.  

•pronumeral- will find the missing lengths of a right triangle.  

•average- will find the average of an array of numbers.    


**Addition, multiply, and average** use a process of vetting your arrays to make sure that they are in fact arrays and also arrays of numbers. Any other data type introduced to any one of these methods will not be accepted as valid and an error will be thrown.

```javascript
const arr = [8,12,37,63,1,22,68,97,4,77,2]
addition(arr) //==> 391
multiply(arr) //==> 20003111073792
average(arr) //==>195.5
```

**Pronumeral** is the only method that can take up to three parameters. Only two are required.

```javascript
pronumeral(8,99) //==>99.32
//Here we enter an ‘a’ and a ‘b’ value and we have left ‘hypotenuse’, which is the third parameter, with its default of undefined. The method will then return ‘hypotenuse’.
pronumeral(undefined,10,23) //==>20.71
//Above we pass in undefined so that the method will return the value of the missing side.
pronumeral(8, undefined, 9) //==>4.12
```

It makes use of Javascript’s default parameter property. Two parameters would then be entered and a third value will be produced. For it to produce the answer that is desired the user must enter the values as they would appear on their right triangle i.e., a, b, or hypotenuse 
The numbers that are returned from the _pronumeral_ method are always rounded up to the nearest hundredth. For example if the answer is 99.123344344 the rounded answer that the client should expect is 99.12.  

### 2. _isNumericArray
This is a method that is used in the others: _addition_, _multiply_, _average_. It performs checks on arrays that would otherwise make our code non-DRY. Currently it is only used for vetting arrays, making sure that they are in fact just arrays of numbers.

```javascript
const _isNumericArray = (arr) => {
    if (Array.isArray(arr) === true) {
        if (arr.length < 2){
           throw new Error('Please enter a valid array of numbers.')
        }
        for (let a = 0; a < arr.length; a++) {
            if (typeof arr[a] !== 'number') {
               throw new Error('All items in array must be numbers.') 
            }
        }
    }
    else{
        throw new Error('Please enter a valid array of numbers.')
    }
}
```
