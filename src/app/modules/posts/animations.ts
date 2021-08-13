import { trigger, animate, transition, style, query } from '@angular/animations'

const styleClosed = { height: 0, opacity: 0 }
const styleOpened = { height: '*', opacity: 1 }

export const openClose = (duration: number, easing: string) =>
	trigger('openClose', [
		transition(':enter', [
			style(styleClosed),
			animate(`${duration}ms ${easing}`, style(styleOpened)),
		]),
		// [Leaving animation (* => void) ignored when routerLink used](https://github.com/angular/angular/issues/9350)
		transition(':leave', [style(styleOpened), animate(`${duration}ms ${easing}`, style(styleClosed))]),
	])
