import Tpl from './template.eft'
import defineCustomElement from '../../utils/define-custom-element.js'

defineCustomElement('ef-hello', Tpl, { attributes: ['version'] })
