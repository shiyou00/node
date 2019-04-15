function t1(){
    const a = parseInt( Math.random() * 10 );
    const b = parseInt( Math.random() * 10 );

    const c = t2(a,b);
}

function t2(a,b){
    if(a>b){
        a += a * 2;
    }else{
        b -= a;
    }

    return a + b;
}

t1();