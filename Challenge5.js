function bistr(inp){
    let binarynum="";
    for(let n=0;n<inp.length;n++) {
        if(Number(inp[n])<5) {
            binarynum=binarynum.concat("0");
        } else if(Number(inp[n])>4) {
            binarynum=binarynum.concat("1");
        }
    }
    return binarynum;
  }
  console.log(bistr("13455"));