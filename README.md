# Simple Ember Tooltip

Hi! This ember addon was designed to help you implement the simplest possible tooltip. The whole addon has less than 50 lines of code and it contains only one ember component called ```simple-tooltip```. Tooltips funcionality is achieved with pure CSS.

## Installing

To install this addon in the root of your ember-cli project run:
```npm install ember-simple-tooltip```


## Simple example

The easiest way to use ```simple-tooltip``` is to pass 2 parameters, ```baseText``` and ```text```. Here is an example:

```{{simple-tooltip baseText="Hover Me!" text="Oh wow!"}}```

This code example will render:
<br>
<img src="https://github.com/dusanstanojeviccs/ember-simple-tooltip/raw/master/example.png" alt="example of usage"/>

## Advanced usage 

If you want to have full controll over your ```simple-tooltip``` you can always pass a full template into it:

```
{{#simple-tooltip text="Oh wow!"}}
	<div class="red-text">Hover Me!</div>
{{/simple-tooltip}}
```
 If you want to render a custom component within the tooltip popup you can pass in a full component:

```
{{#simple-tooltip tooltipComponent=(component "yourCustomComponent")}}
	<div class="red-text">Hover Me!</div>
{{/simple-tooltip}}
```
 

## Styling the tooltip

The ```simple-tooltip``` component contains only 3 classes:
*simple-tooltip
*simple-tooltip-container
*simple-tooltip-content


You can override all it's CSS properties by using those classes.

## Contact

If you have any questions or suggestions feel free to open issues on github or send me an email at dusan.stanojevic.cs@gmail.com.

