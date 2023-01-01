/*
 * array to simulate tree
 * size as weight
 * path compression
 */

class UF {
  constructor(count) {
    this.count = count
    this.parent = new Array(this.count)
    // use size as weight
    this.size = new Array(this.count)
    for (let i = 0; i < count; i++) {
      this.parent[i] = i
      this.size[i] = 1
    }
  }
  union(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    // merge two trees
    if (rootP === rootQ) {
      return
    }
    // move smallTree(rootQ) to biggerTree(rootP)
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = this.size[rootP]
      this.size[rootP] += this.size[rootQ]
    } else {
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    }
    this.count--
  }
  // find2(x) {
  //   // there are always some node pointed to himself
  //   while (this.parent[x] !== x) {
  //     // !path compression
  //     this.parent[x] = this.parent[this.parent[x]]
  //     x = this.parent[x]
  //   }
  //   return x
  // }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(parent[x])
    }
    return this.parent[x]
  }
  connected(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    return rootP === rootQ
  }
  count() {
    return this.count
  }
}

const uf = new UF(10)
uf.union(0, 1)
uf.union(1, 2)
uf.union(2, 3)
uf.union(3, 4)
uf.connected(0, 4)
