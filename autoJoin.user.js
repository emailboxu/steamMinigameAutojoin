// ==UserScript==
// @name Monster Minigame autojoin script
// @namespace https://github.com/RockyTV/steamMinigameAutojoin
// @description A script that automatically joins a Steam Monster Minigame room.
// @version 1.0
// @match *://steamcommunity.com/minigame/
// @match *://steamcommunity.com//minigame/
// @grant none
// @updateURL https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js
// @downloadURL https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js
// ==/UserScript==

function customJoin(gameid) {
	var modal = ShowBlockingWaitDialog('Joining game', 'Attempting to join game...');
	$J.post(
		'http://steamcommunity.com/minigame/ajaxjoingame/',
		{ 'gameid' : gameid }
	).done(function(json) {
		if (json.success == '1') {
			window.clearInterval(joinTimer);
			modal.Dismiss();
			modal = ShowDialog('Joining game', 'Game found! Redirecting you in a few seconds.');
			window.setTimeout("top.location.href = 'http://steamcommunity.com/minigame/towerattack/'", 1500);
		}
	}).fail( function( jqXHR ) {
		var responseJSON = jqXHR.responseText.evalJSON();
		if (responseJSON.success == '24') {
			modal.Dismiss();
			modal = ShowAlertDialog('Error', 'You cannot join a game that is more than 10 levels higher than the highest level you have completed.');
		}
	});
}

function joinBtnClick() {
	var element = document.querySelector('.minigame_roomid');
	if (element) {
		customJoin(element.value);
	}
}

function mainBtnClick() {
	var joinTimer = window.setInterval(function() {
		window.clearInterval(joinTimer);
		joinTimer = window.setInterval(customJoin(0), 1000);
	}, 1000);
}

var appendTo = document.querySelector('.new_game');
if (document.getElementsByClassName('current_game')[0]) {
	appendTo = document.querySelector('.current_game');
}
// Append our buttons and inputs to the page
if (appendTo) {
	appendTo.style.marginTop = '0px';
	
	var element = document.createElement('style');
	element.type = 'text/css';
	element.innerHTML = '.minigame_roomid -webkit-outer-spin-button -webkit-inner-spin-button { webkit-appearance: none; }';
	element.innerHTML += '.minigame_joinbtn { margin-top: 1px; background-color: #8aaf05; font-family: "Press Start 2P", arial, sans-serif; color: #d9ff54; border: 2px solid #a3cf06; font-size: 12px; text-align: center; cursor: pointer; display: inline-block; box-shadow: 2px 2px 0px #000; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }';
	element.innerHTML += '.minigame_joinbtn span { padding: 0px 15px; line-height: 32px; }';
	element.innerHTML += '.minigame_joinbtn:hover { background-color: #a3cf06; color: #fff; }';
	appendTo.appendChild(element);
	
	element = document.createElement('br');
	appendTo.appendChild(element);
	
	element = document.createElement('span');
	element.className = 'start_new';
	element.textContent = 'Room ID: ';
	appendTo.appendChild(element);
	
	element = document.createElement('input');
	element.type = 'number';
	element.value = 0;
	element.min = 0;
	element.max = Number.MAX_SAFE_INTEGER;
	element.className = 'minigame_roomid';
	element.name = 'minigame_roomid';
	appendTo.appendChild(element);
	
	element = document.createElement('br');
	appendTo.appendChild(element);
	
	var linkElement = document.createElement('a');
	linkElement.className = 'minigame_joinbtn';
	linkElement.setAttribute('onclick', 'joinBtnClick();');
	
	element = document.createElement('span');
	element.textContent = 'Join Room';
	
	linkElement.appendChild(element);
	appendTo.appendChild(linkElement);
}

// Change mainBtn function
var mainBtn = document.querySelector('.main_btn');
mainBtn.href = '#';
mainBtn.setAttribute('onclick', 'mainBtnClick();');
