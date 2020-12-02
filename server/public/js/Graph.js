class Graph {
  constructor () {
    // initialize the array that will hold all our vertices
    this.Vertices = []
  }

  addVertex (vertex) {
    // add a new vertex to the list
    this.Vertices.push(
      {
        Name: vertex,
        Edges: []
      }
    )
  }

  addEdge (startVertex, finishVertex, weight) {
    // get the appropriate object that corresponds to the name of the asked vertex
    var vertex = this.Vertices.find(x => x.Name == startVertex)

    // if vertex is null, then no vertex with that name was found
    if (vertex == null) { throw 'Vertex not found in the list!' } // throw an exception to the user

    // add the edge to the corresponding vertex
    vertex.Edges.push(
      {
        Finish: finishVertex,
        Weight: weight
      }
    )
  }

  dijkstra (startVertex) {
    // get the appropriate object that corresponds to the name of the asked vertex
    var initVertex = this.Vertices.find(x => x.Name == startVertex)

    // if vertex is null, then no vertex with that name was found
    if (initVertex == null) { throw 'Vertex not found in the list!' } // throw an exception to the user

    // initialize all fields related to the dijkstra shortest path finding
    for (var vertex of this.Vertices) {
      vertex.WeightOfPath = Infinity
      vertex.PrevVertexOfPath = null
      vertex.Visited = false
    }

    // initialize the weight of the start vertex to zero
    initVertex.WeightOfPath = 0
    // initialize the previous vertex of the dijkstra path to itself (denoting that this is the start of our path)
    initVertex.PrevVertexOfPath = initVertex

    // preform the dijkstra algorithm to our graph
    this.doDijkstra(initVertex, this.Vertices)
  }

  getDijkstraPath (finishVertex) {
    // get the appropriate object that corresponds to the name of the finish vertex
    var vertex = this.Vertices.find(x => x.Name == finishVertex)

    // if the previous node in the path is the same as the current,
    // then we hit the starting vertex
    if (vertex.PrevVertexOfPath.Name == vertex.Name) { return finishVertex } // return the name of the current, and at the same time starting vertex

    // if we got so far, we return the name of the current vertex and we also ask the name of the previous one
    return (vertex.Name + ' <- ' + this.getDijkstraPath(vertex.PrevVertexOfPath.Name))
  }

  doDijkstra (startVertex, vertices) {
    // If the current vertex has been visited or it does not have any edges, then
    // there is no point on visiting it
    if (startVertex.Visited == true || startVertex.Edges == null) { return }

    // we change the status of the vertex to visited
    startVertex.Visited = true

    // we loop through all edges of the current vertex
    for (var edge of startVertex.Edges) {
      // we get the object of the finishing vertex
      var finishVertex = vertices.find(x => x.Name == edge.Finish)
      // we get the weight of the path until this vertex
      var totalWeight = (startVertex.WeightOfPath + edge.Weight)

      // if the so-far weight of the graph is smaller than the current so-far weight of the graph, then
      if (totalWeight < finishVertex.WeightOfPath) {
        // we set the current weight of the path to the total weight
        finishVertex.WeightOfPath = totalWeight

        // we set as the previous vertex of this graph, the current vertex
        finishVertex.PrevVertexOfPath = startVertex
      }

      // we run dijkstra again by getting the object at the end of the edge, and passing again the list of the vertices
      this.doDijkstra(vertices.find(x => x.Name == edge.Finish), vertices)
    }
  }
}
