class HashMap {
  constructor(initalCapacity = 16) {
    this.capacity = initalCapacity;
    this.buckets = new Array(initalCapacity);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);
    if (this.buckets[index] == undefined) {
      this.buckets[index] = [];
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] == key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.buckets[index] == null || this.buckets[index] == undefined) {
      return undefined;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] == key) {
        return this.buckets[index][i][1];
      }
    }
  }

  has(key){
    let index = this.hash(key);
    if(this.buckets[index] == null || this.buckets[index] == undefined ){
        return false
    }
    for(let i=0; i<this.buckets[index].length ; i++){
        
    }
  }
}
