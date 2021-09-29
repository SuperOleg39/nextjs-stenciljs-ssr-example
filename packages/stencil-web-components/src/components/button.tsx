import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-kit-button',
})
export class Button {

  @Prop() buttonTitle: string = '';

  render() {
    return (
      <button>
        {this.buttonTitle}
      </button>
    );
  }
}
