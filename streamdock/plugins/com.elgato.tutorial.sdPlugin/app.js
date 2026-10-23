/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const pluginsAction = new Action('com.elgato.tutorial.plugins');
const accountsAction = new Action('com.elgato.tutorial.accounts');
const actionsAction = new Action('com.elgato.tutorial.actions');
const multiActionsAction = new Action('com.elgato.tutorial.multi-actions');
const foldersAction = new Action('com.elgato.tutorial.folders');
const pagesAction = new Action('com.elgato.tutorial.pages');
const profilesAction = new Action('com.elgato.tutorial.profiles');
const smartProfilesAction = new Action('com.elgato.tutorial.smart-profile');
const dialStacksAction = new Action('com.elgato.tutorial.dial-stacks');
const volumeControllerAction = new Action('com.elgato.tutorial.volume-controller');
const waveLinkAction = new Action('com.elgato.tutorial.wave-link');

pluginsAction.onKeyUp(() => {
	window.open('actions/plugins.html', 'Tutorial');
});

accountsAction.onKeyUp(() => {
	window.open('actions/accounts.html', 'Tutorial');
});

actionsAction.onKeyUp(() => {
	window.open('actions/actions.html', 'Tutorial');
});

multiActionsAction.onKeyUp(() => {
	window.open('actions/multi-actions.html', 'Tutorial');
});

foldersAction.onKeyUp(() => {
	window.open('actions/folders.html', 'Tutorial');
});

pagesAction.onKeyUp(() => {
	window.open('actions/pages.html', 'Tutorial');
});

profilesAction.onKeyUp(() => {
	window.open('actions/profiles.html', 'Tutorial');
});

smartProfilesAction.onKeyUp(() => {
	window.open('actions/smart-profile.html', 'Tutorial');
});

dialStacksAction.onKeyUp(() => {
	window.open('actions/dial-stacks.html', 'Tutorial');
});

volumeControllerAction.onKeyUp(() => {
	window.open('actions/volume-controller.html', 'Tutorial');
});

waveLinkAction.onKeyUp(() => {
	window.open('actions/wave-link.html', 'Tutorial');
});