import { customElement, html, LitElement, property } from 'lit-element'

@customElement('di-element')
export class DiMarkdown extends LitElement {
   @property()
   value = 'Lit Element'

   render() {
      return html`${this.value}`
   }
}
