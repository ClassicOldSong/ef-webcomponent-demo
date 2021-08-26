import { mapAttrs } from 'ef-core'
import makeCustomElement from './make-custom-element.js'

const defineCustomElement = (elementName, component, options) => {
	const { attributes = [], slots } = options
	const attrMap = {}
	for (let i of attributes) {
		attrMap[i] = {}
	}
	const CustomElement = makeCustomElement(mapAttrs(component, attrMap), {
		attributes,
		slots,
		extends: options.extends
	})

	customElements.define(elementName, CustomElement)
}

export default defineCustomElement
