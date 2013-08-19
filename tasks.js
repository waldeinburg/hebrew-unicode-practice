var tasks = [
//{
//	text: 'Enter the Hebrew alphabet! Exclude final forms and write Shin/Sin as one character without dots!',
//	result: 'אבגדהוזחטיכלמנסעפצקרשת',
//	start: '',
//	help: 'The result should be: #'
//},
{
	title: 'Entering text',
	text: 'Enter this text: #',
	result: 'abcאבגdefדהו',
	start: ''
}, {
	title: 'Changing text: adding',
	text: 'Change the text to this: #',
	result: 'abcאבdגדe',
	start: 'abcאבג'
}, {
	title: 'Changing text: deleting',
	text: 'Change the text to this: #',
	result: 'abcאבגד',
	start: 'abcאבdגדהe'
}, {
	title: 'Selecting text',
	text: 'Select the following text with the mouse (try doing it without double-clicking) and copy-paste it into the input field:<br/>#',
	result: 'aaaa אאאא bbbb בבבב',
	start: ''		
}, {
	title: 'Selecting text (a bit trickier)',
	text: 'Select the following text with the mouse (try doing it without double-clicking) and copy-paste it into the input field:<br/>#',
	result: 'אאאא aaaa בבבב bbbb גגגג',
	start: ''		
}, {
	title: 'Grasping the difference between symbols and letters',
	text: 'Enter this text: #',
	result: 'אב & גד and הו',
	start: ''
}, {
	title: 'Grasping the <em>annoying</em> difference between symbols and letters',
	text: 'Enter this text: #',
	result: 'An ב !א too! ג also!',
	start: ''
}
];
