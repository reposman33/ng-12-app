import { trigger, animate, transition, style, query } from '@angular/animations'

const styleClosed = { height: 0, opacity: 0 }
const styleOpened = { height: 'auto', opacity: 1 }

export const openClose = (duration: number, easing: string) =>
	trigger('openClose', [
		transition(':enter', [
			style(styleClosed),
			animate(`${duration}ms ${easing}`, style(styleOpened)),
		]),
		transition(':leave', [animate(`${duration}ms ${easing}`, style(styleClosed))]),
	])
