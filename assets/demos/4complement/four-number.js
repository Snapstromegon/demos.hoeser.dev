import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
export class FourNumber extends LitElement {
  static properties = {
    number: { type: Number },
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css``;

  constructor() {
    super();
    // Declare reactive properties
    this.name = "World";
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <label
        >Base 10
        <input
          type="number"
          value=${this.number}
          @input=${this.update10}
          id="base10" /></label
      ><br />
      <label
        >Base 2
        <input
          type="number"
          value=${this.numberBase2}
          id="base2"
          @input=${this.update2} /></label
      ><br />
      <label
        >Base 4
        <input
          type="number"
          value="${this.numberBase4}"
          @input=${this.update4}
          id="base4"
      /></label>
    `;
  }

  get numberBase2() {
    return (this.number >>> 0).toString(2).substr(-16).padStart(16, 0);
  }
  get numberBase4() {
    return (this.number >>> 0).toString(4).substr(-8).padStart(8, 0);
  }

  update10() {
    this.number = this.renderRoot.querySelector("#base10").value;
  }
  update2() {
    this.number = parseInt(this.renderRoot.querySelector("#base2").value, 2);
  }
  update4() {
    this.number = parseInt(this.renderRoot.querySelector("#base4").value, 4);
  }
}
customElements.define("four-number", FourNumber);
