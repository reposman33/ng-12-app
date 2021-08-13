import {
	trigger,
	state,
	query,
	style,
	animate,
	transition,
	stagger,
} from '@angular/animations'

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

export const fadeInOut = trigger('fadeInOut', [
	state(':enter', style(styleClosed)),
	state(':leave', style(styleOpened)),
	transition(':enter', animate('300ms ease-in-out', style(styleOpened))),
	transition(':leave', animate('300ms ease-in-out', style(styleClosed))),
])
