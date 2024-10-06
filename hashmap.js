let arr = new Array(16);



class HashMap{
    constructor(key){
        key = this.key
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    } 

    set(key, value){
        let hashCode = this.hash(key)

    }
}