import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stencil-kit-link',
})
export class Link {

  @Prop() href: string = '';

  @Prop() linkTitle: string = '';

  render() {
    return (
      <a href={this.href}>
        {this.linkTitle}
      </a>
    );
  }
}
