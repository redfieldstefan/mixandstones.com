/**
 * Binds an array of component methods to a context (the component)
 */
export const bindMethods = (methods = [], context = {}) => {
	methods.forEach((method) => context[method] = context[method].bind(context));
};
