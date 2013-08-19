$(function() {

function nextTask() {
	correct = false,
	eCorrect.hide();
	eNext.hide();
	++taskI;
	if (taskI == tasks.length) {
		$('#task').
			html('<p class="correct">Congratulations! You have finished!</p>');
		return;
	}
	curTask = tasks[taskI];
	eCurTaskNo.text(taskI+1);
	eText.html( processString(curTask['text']) );
	eTitle.html(curTask['title']);
	eInput.val(curTask['start']);
	eInput.focus();
}


function processString(str) {
	return str.replace('#', '<span class="hebrew">' + curTask['result'] + '</span>');
}


function checkAnswer() {
	if (eInput.val() == curTask['result']) {
		correct = true;
		eCorrect.show();
		eNext.show();
	} else {
		correct = false;
		eCorrect.hide();
		eNext.hide();
	}
}


var taskI = -1,
	correct = false,
	curTask,
	caTimeout,
	eInput = $('#input'),
	eText = $('#text'),
	eTitle = $('#title'),
	eCurTaskNo = $('#taskNo'),
	eCorrect = $('#correct'),
	eNext = $('#next');

function set_attribute(attr, callback) {
	var re = new RegExp('\\??(?:[^=]+=[^&]*&)*'+attr+'=([^&]*)', 'g');
	//var re = /\??(?:[^=]+=[^&]*&)*lang=([^&]*)/g;
	window.location.search.replace(re, callback);
}
set_attribute('task', function(s, v) {
	if (v >= 1 && v <= tasks.length)
		taskI = v-2;
});


$('#total').text(tasks.length);

$('#inputForm').submit(function(event) {
	event.preventDefault();
	if (correct) {
		nextTask();
	}
});

eInput.
	mousedown(function(event) {
		event.preventDefault();
		eInput.focus();
	}).
	keydown(function(event) {
		/* prevent text selection */
		if (event.shiftKey && (event.which == 37 || event.which == 39)) {
			event.preventDefault();
		}
		clearTimeout(caTimeout);
		caTimeout = setTimeout(checkAnswer, 100);
	});

eNext.
	click(nextTask).
	button();

nextTask();

});
