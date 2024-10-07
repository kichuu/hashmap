class HashMap {
  constructor(initalCapacity = 16) {
    this.capacity = initalCapacity;
    this.buckets = new Array(this.capacity);
    this.count = 0
    this.loadfactor = 0.75
  }

  resizeBucket() {
    const oldBuckets = this.buckets;
    this.capacity *= 2; 
    this.buckets = new Array(this.capacity); 
    this.count = 0; 

  
    for (let i = 0; i < oldBuckets.length; i++) {
        const bucket = oldBuckets[i];
        if (bucket) {
            for (let j = 0; j < bucket.length; j++) {
                const [key, value] = bucket[j];
                const index = this.hash(key); 
                if (this.buckets[index] === undefined) {
                    this.buckets[index] = [];
                }
                this.buckets[index].push([key, value]); 
                this.count++; 
            }
        }
    }
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
    if(this.count >= (this.loadfactor*this.capacity)){
      this.resizeBucket()
    }
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
    this.count ++
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

  has(key) {
    let index = this.hash(key);
    if (this.buckets[index] == null || this.buckets[index] == undefined) {
      return false;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] == key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    let index = this.hash(key);
    if (this.buckets[index] == null || this.buckets[index] == undefined) {
      return false;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] == key) {
        this.buckets[index].splice(i, 1);
        this.count--
        return true;
        
      }
    }
    return false;
  }

  length(){
    return this.count
  }

  clear(){
    this.capacity = initalCapacity;
    this.buckets = new Array(initalCapacity);
    this.count = 0
  }

  keys(){
    let keysArr =[]
    for(let i=0;i<this.buckets.length;i++){
      if(this.buckets[i] != null || this.buckets[i] != undefined){
        for(let j=0;j<this.buckets[i].length;j++){
          keysArr.push(this.buckets[i][j][0])
        }
      }
    }
    return keysArr
  }

  values(){
    let valArr =[]
    for(let i=0;i<this.buckets.length;i++){
      if(this.buckets[i] != null || this.buckets[i] != undefined){
        for(let j=0;j<this.buckets[i].length;j++){
          valArr.push(this.buckets[i][j][1])
        }
      }
    }
    return valArr
  }

  entries(){
    let entriesArr = []
    for(let i=0;i<this.buckets.length;i++){
      if(this.buckets[i] != null || this.buckets[i] != undefined){
        for(let j=0;j<this.buckets[i].length;j++){
          entriesArr.push(this.buckets[i][j])
        }
      }
    }
    return entriesArr
  }
}

export default HashMap