import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'stencil-kit-div',
  shadow: true,
})
export class Div {

  @State()
  count: number = 100;

  async click() {
    console.log("click", this.count);
    this.count++;
  }

  render() {
    return (
      <div>
        <slot />

        <div>
          <h3>Change Local State</h3>
          {this.count} -{" "}
          <button class="green" onClick={() => this.click()}>
            Click
          </button>
        </div>
      </div>
    );
  }
}
