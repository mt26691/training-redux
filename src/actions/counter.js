import *  as Types from '../common/types';


export function increment() {
	console.log("increment");
	return {
		type: Types.INCREMENT
	};
}

export function decrement() {
	console.log("decrement");
	return {
		type: Types.DECREMENT
	};
}