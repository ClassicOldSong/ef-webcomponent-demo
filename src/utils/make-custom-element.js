import Slot from './slot'
import { inform, exec } from 'ef-core'

/* eslint camelcase: off */
const makeCustomElement = (efComponent, options) => {
	const { attributes = [], slots = [] } = options
	let base = HTMLElement
	if (options.extends) base = options.extends
	const CustomElement = class extends base {
		static get observedAttributes() {
			return attributes
		}

		constructor() {
			super()
			const root = this.attachShadow({ mode: 'open' })
			inform()
			const component = new efComponent()
			if (slots.length) {
				for (let i of slots) {
					if (Array.isArray(component[i])) component[i].push(new Slot(i))
					else component[i] = new Slot(i)
				}
			}
			component.$mount({ target: root })
			this.__ef_component = component
			exec()
		}

		attributeChangedCallback(name, oldValue, newValue) {
			this.__ef_component[name] = newValue
		}
	}

	for (let i of Object.getOwnPropertyNames(efComponent.prototype)) {
		Object.defineProperty(CustomElement, i, {
			get() {
				return this.__ef_component[i]
			},
			set(val) {
				this.__ef_component[i] = val
			}
		})
	}

	return CustomElement
}

export default makeCustomElement
