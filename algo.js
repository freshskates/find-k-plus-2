fun={
    '+':(a,b)=>a+b,
    '-':(a,b)=>a-b,
    '*':(a,b)=>a*b,
    '/':(a,b)=>a/b,
}
A1 = parseInt(readline());
A2 = parseInt(readline());
operator = readline();
k = parseInt(readline());
e=false
v=[A1,A2]
if(fun.hasOwnProperty(operator)){
    for(i=2;i<=k+1;i++){
        v.push(fun[operator](v[i-2],v[i-1]))
    }
    console.log(v[k+1]);
}else{
    print('ERROR')
}
