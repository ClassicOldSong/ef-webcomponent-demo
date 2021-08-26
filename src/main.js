// Import style
import './main.css'

// Import templates
import App from './app.eft'

import './custom-elements/hello'
import './custom-elements/copyright'
import './custom-elements/link'
// Import helper function and version info from `ef-core`
import { version } from 'ef-core'
import defineCustomElement from './utils/define-custom-element.js'

defineCustomElement('ef-app', App, { slots: ['hello', 'links', 'copyright'] })

const hello = document.querySelector('.hello')
const copyright = document.querySelector('.copyright')
hello.setAttribute('version', version)
copyright.setAttribute('year', new Date().getFullYear())
