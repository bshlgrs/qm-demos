import Link from 'next/link'
import Layout from '../components/Layout'
import MarkdownWithLatex from '../components/MarkdownWithLatex'
import katex from 'katex'
import Immutable from 'immutable'

class Einsum extends React.Component {
  constructor () {
    super();
    this.state = {
      text: 'ij,jk->ik'
    }
  }

  equation () {
    try {
      let input, output, inputs, allInputIndexes;
      if (this.state.text.indexOf("->") == -1) {
        input = this.state.text;
        inputs = input.split(",");

        allInputIndexes = Immutable.Set(inputs.join("").split(""));
        output = allInputIndexes.toList().sort().toJS().join('');
      } else {
        [input, output] = this.state.text.split("->");
        inputs = input.split(",");

        allInputIndexes = Immutable.Set(inputs.join("").split(""));
      }

      const outputIndexSet = Immutable.Set(output);

      if (outputIndexSet.size != output.length) {
        throw "repeated index in output";
      }

      const inputNames = "ABCDEFG";
      const summedVariables = allInputIndexes.subtract(outputIndexSet);

      const inputCalculations = inputs.map((x, idx) =>
        inputNames[idx] + "_{" + x +"}"
      ).join("\\cdot ")

      const lhs = `\\text{Out}_{${output}}`;
      // debugger;
      if (summedVariables.size > 0) {
        return `$^$${lhs} = \\sum_{${summedVariables.join('')}} ${inputCalculations}$^$`
      } else {
        return `$^$${lhs} = ${inputCalculations}$^$`
      }
    } catch (e) {
      return 'invalid: ' + e;
    }
  }

  render () {
    return <Layout>
      <h2>Einsum</h2>

      <MarkdownWithLatex text={`
Here’s something about Einstein summation of tensors that I just figured out. Maybe it’s obvious, but I thought it was interesting.

We can write a lot of functions from tensors to tensors using an abbreviated form of Einstein notation. I’ll introduce it by example:

\`ij,jk->ik\` identifies the function $$f(A, B)_{ik} = \\sum_k A_{ij}\\cdot B_{jk} $$. This is normal matrix multiplication.

\`ij->ji\` identifies $$f(A)_{ji} = A_{ij}$$. This is a matrix transpose.




      `} />

      <input value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />

      <p>{this.state.text}</p>

      <MarkdownWithLatex text={`${this.equation()}`}/>
    </Layout>
  }
}

export default Einsum
