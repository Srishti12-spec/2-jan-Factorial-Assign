function fact(n){
    if(n==1){
        return 1;
    }
    else{
        return n * fact(n-1);
    }
}
 

function btn(){
 var val =   document.getElementById("num").value;
 var para = document.getElementById("para");
 var resultVal = fact(val);
//  console.log(resultVal);
 para.innerText = resultVal;

}