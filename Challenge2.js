function sqSum(x){
    var square=x.map(num=>num*num);
    var addNumbers=square.reduce((acc,curr)=> acc + curr);
    console.log(addNumbers)
  };
  sqSum([1, 2, 2]);