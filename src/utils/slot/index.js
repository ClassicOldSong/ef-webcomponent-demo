import Tpl from './template.eft'

export default class Slot extends Tpl {
	constructor(name) {
		super({
			$data: { name }
		})
	}
}
