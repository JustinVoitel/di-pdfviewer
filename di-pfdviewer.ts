import { customElement, html, LitElement, property } from 'lit-element'

@customElement('di-pdfviewer')
export class PdfViewer extends LitElement {
   connectedCallback() {
      super.connectedCallback()
   }

   createRenderRoot() {
      return this
   }

   @property()
   url = 'example.pdf'

   render() {
      return html`<iframe
         part="frame"
         width="400px"
         height="500px"
         src=${this.url}
      >
      </iframe>`
   }
}
