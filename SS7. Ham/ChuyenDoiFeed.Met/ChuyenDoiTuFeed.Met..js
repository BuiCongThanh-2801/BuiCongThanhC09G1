function feetToMet(val) {
    val=parseFloat(val);
  document.getElementById("outputMet").innerHTML=0.305*val

}
function metToFeet(val) {
    val=parseFloat(val);
    document.getElementById("outputFeet").innerHTML=(3.279*val);

    
}