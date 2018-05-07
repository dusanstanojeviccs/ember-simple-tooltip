import Ember from 'ember';
import layout from '../templates/components/simple-tooltip';

export default Ember.Component.extend({
	tagName: '',
	layout,
	hasContent: Ember.computed("text", "tooltipComponent", function() {
		return this.get("text") || this.get("tooltipComponent");
	})
});
