class Graph {
  constructor() {
    this.vertices = new Set()
    this.adjacentList = new Map()
  }
  addVertice(vertice) {
    if (vertice && !this.vertices.has(vertice)) {
      if (!this.adjacentList[vertice]) {
        this.vertices.add(vertice)
        this.adjacentList.set(vertice, new Set())
      }
    }
  }
  addEdge(vertice1, vertice2) {
    this.adjacentList.get(vertice1).add(vertice2)
    this.adjacentList.get(vertice2).add(vertice1)
  }
  printGraph() {
    this.vertices.forEach(vertice => {
      const msg = `${vertice} -> ${Array.from(
        this.adjacentList.get(vertice)
      ).join(' ')}`
      console.log('msg', msg)
    })
  }
  bfs(startingNode, callback) {
    const visited = new Map()
    const queue = [startingNode]
    visited.set(startingNode, true)
    while (queue.length > 0) {
      const item = queue.pop()
      const neighbors = this.adjacentList.get(item)
      callback(item)
      neighbors.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true) // set flag here
          queue.push(neighbor)
        }
      })
    }
  }
  dfs(startingNode) {
    const visited = new Map()
    this.dfsUtil(startingNode, visited)
  }
  dfsUtil(vertice, visited) {
    visited.set(vertice, true)
    console.log(vertice)
    const neighbors = this.adjacentList.get(vertice)
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        this.dfsUtil(neighbor, visited)
      }
    })
  }
}

const g = new Graph()
const vertices = ['A', 'B', 'C', 'D', 'E', 'F']

for (var i = 0; i < vertices.length; i++) {
  g.addVertice(vertices[i])
}

g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')
g.addEdge('B', 'C')
g.addEdge('D', 'E')
g.addEdge('E', 'F')
g.addEdge('E', 'C')
g.addEdge('C', 'F')

g.printGraph()

console.log('bsf start--------')
g.bfs('A', item => console.log(item))

console.log('dfs start----------')
g.dfs('A', item => console.log(item))

// module.exports = Graph
