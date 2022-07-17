import React, { Component } from 'react'

class PrintThisComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => window.print()}>Print this recipe</button>
      </div>
    )
  }
}

export default PrintThisComponent