import React, { Component } from 'react'

class PrintThisComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => window.print()}>Imprimer cette recette</button>
      </div>
    )
  }
}

export default PrintThisComponent