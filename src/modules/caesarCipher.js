export default class caesarCipher {
  constructor (){
    this.lettersMap = this.createLetterMap();
  }
  createLetterMap(){
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(inputStr, shift){
    const indexA = 'A'.charCodeAt(0);
    const capStr = inputStr.toUpperCase();

    return capStr.split('').map( c =>{
      const code = c.charCodeAt(0);
      if((code-indexA) <0 || (code-indexA) >= 26)
      {
        return c;
      }else{
        return this.lettersMap[(code - indexA + shift) % 26];
      }
    }).join('');;
  }
}