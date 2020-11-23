function calLPN(dob) {
        let res = dob.split('-');
        console.log(res);
        let y = res.join('');
        console.log(y);
        let sumDOB = parseInt(y[0])+parseInt(y[1])+parseInt(y[2])+parseInt(y[3])+
                  parseInt(y[4])+parseInt(y[5])+parseInt(y[6])+parseInt(y[7]);
                
        let num = parseInt(sumDOB);
        let calculate=0;
        while(num > 0) {
            let remainder = num%10;
            calculate += remainder;
            num  = Math.floor(num / 10);
            if(calculate > 9) {
                num = calculate;
                calculate = 0;
            }
        }
        console.log("Life Path Number: "+calculate);
    }
  calLPN("1994-06-01");
