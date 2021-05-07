const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      const newCollection = (collection instanceof Array ? collection.slice() : Object.values(collection))
      
      for (let i = 0; i<newCollection.length; i++){
        callBack(newCollection[i])
      }  

      return collection
    },

    map: function(collection, callBack) {
      const newCollection = (collection instanceof Array ? collection.slice() : Object.values(collection))
      
      

      return newCollection.map((element, index) => {
        return callBack(element, index, newCollection)
      })
    },

    reduce: function(collection, callback, acc) {
      let newCollection = (collection instanceof Array ? collection.slice() : Object.values(collection))
     
      if (acc === undefined){
        acc = newCollection[0];
        newCollection = newCollection.slice(1)
      }

      return newCollection.reduce((acc, element) => {
        return callback(acc, element, newCollection)
      }, acc)
    },

    find: function(collection, predicate){
      return collection.find(element =>  predicate(element))
    },

    filter: function(collection, predicate){
      return collection.filter(element => predicate(element))
    },

    size: function(collection){
      return Object.values(collection).length
    },

    first: function(array, numFirstElements){
      return numFirstElements === undefined ? array[0] : array.slice(0, numFirstElements)
    },

    last: function(array, numLastElements){
      return numLastElements === undefined ? array[array.length-1] : array.slice(-numLastElements)
    },

    compact: function(array){
      return array.filter(element => element)
    },

    sortBy: function(array, callback){
      let  newArray = [...array];
      return newArray.sort((a,b) => callback(a) - callback(b))
    },  

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted, callback){

      return array.filter((element, index)=> {
        return array.indexOf(element) === index
      }); 

    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    }, 

    functions: function(object) {
      const allMethodsInObject =  [];
      for (let key in object){
        if (typeof object[key] === `function`){
          allMethodsInObject.push(key)
        }
      }
      return allMethodsInObject;
    },


  }
})()

fi.libraryMethod();

