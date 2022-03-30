const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    //console.log(`Toto je ${t1}`);
    let t2 = Date.now();
    //console.log(`Toto je ${t2}`)
    return t2 - t1;
  };
  
  
  // Write your code below
  
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  //console.log(time2p2);
  
  
  const checkConsistentOutput = (func, val) => {
    const resultOfFunc1 = func(val);
    const resultOfFunc2 = func(val);
    if (resultOfFunc1 === resultOfFunc2) {
      return resultOfFunc1;
    } 
      return 'This function returned inconsistent results';
  }
  
  const result = checkConsistentOutput(addTwo, 4);
  console.log(result);