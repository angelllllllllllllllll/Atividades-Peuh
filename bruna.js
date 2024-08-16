function Valores () {
   let num = window.prompt ("insira o valor em metro")
   let km = num / 1000;
   let hm = num/100;
   let dam= num/10;
   let dm= num*10;
   let cm= num*100;
   let mm= num*1000;
   alert (`valor km ${km} valor em dm ${dm} valor em hm ${hm} valor em dam ${dam} valor em cm ${cm} valor em mm ${mm}`)
     
}

