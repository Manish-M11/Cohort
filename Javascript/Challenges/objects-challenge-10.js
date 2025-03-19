function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
      let path = keyPath.split(".");
  
      let last = path.length - 1;
  
    let final = path[last];
  
    if(Object.keys(obj).length && obj[final] != undefined){
      return obj[final]
    }else{
      return "Key not found"
    }
  }


  