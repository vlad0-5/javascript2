function tri(){
    var x= parseInt( document.getElementById("x").value);
    var x1=Math.pow((Math.cos(x)+Math.sin(x)),2);
    var y=1+2*(Math.sin(x)*Math.cos(x));
    document.getElementById('Resu').innerHTML=x1.toFixed(2)+"="+y.toFixed(2);
    }

function tri1(){
    var x= parseInt( document.getElementById("x").value);
    var x1=1-2*Math.cos(x)-3*Math.pow(Math.cos(x),2);
    var x2=Math.pow(Math.sin(x),2);
    var x3=x1/x2;
    var y=1-3*Math.cos(x);
    var y2=1-Math.cos(x);
    var y3=y/y2

    document.getElementById('Resu2').innerHTML=x3.toFixed(2)+"="+y3.toFixed(2);
    }

   





function triide(){
    var x= parseInt( document.getElementById("x").value);
    var y= parseInt( document.getElementById("y").value);
    var a=Math.PI/x;
    var b=Math.PI/y;
    var y2=Math.tan(a+b);
    var x2=Math.tan(a)+Math.tan(b);
    var x3=1-Math.tan(a)*Math.tan(b);
    var x4=x2/x3
    document.getElementById('Resu').innerHTML=y2.toFixed(2)+"="+x4.toFixed(2);
}

function perimetro(){
    var A= parseInt( document.getElementById("A").value);
    var B= parseInt( document.getElementById("B").value);
    var a1=Math.PI*(A+B);
    var a2=Math.sqrt((3*A+B)*(A+3*B));
    var a3=A+B;
    var a4=a2/a3;
    var b1=3-a4;
    var b2=a1*b1;
    document.getElementById('Resu').innerHTML="el perimetro del elipse es ="+b2.toFixed(2);
    }

    
function cp1(){
    var dg= parseInt( document.getElementById("Dg").value);
    var v= parseInt( document.getElementById("V").value);
    var ka= parseInt( document.getElementById("Ka").value);
    var ke= parseInt( document.getElementById("Ke").value);
    var t= parseInt( document.getElementById("t").value);
    var a1=dg/v;
    var a2=ka/(ka-ke);
    var a3=ke*t;
    var a4=ka*t;
    var b1=Math.pow(Math.E,-a3);
    var b2=Math.pow(Math.E,-a4);
    var b3=b1-b2;
    var b4=a1*a2*b3;
    document.getElementById('Resu').innerHTML="por el tiempo de "+" "+t+" "+"horas"+" "+"el cp es ="+b4.toFixed(2);
}

