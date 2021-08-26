import Tpl from './template.eft'
import defineCustomElement from '../../utils/define-custom-element.js'

defineCustomElement('ef-copyright', Tpl, { attributes: ['year', 'author'] })
