function charging(batteryLevel) {
    let charged = batteryLevel + 20;

    if(charged > 100){
      let a = charged % 100;
  
      return charged - a;
    }
    return charged;
  }

  console.log(charging(50));