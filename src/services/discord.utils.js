const endpoint = 'https://discordapp.com/api/v9/invites/';
const queryParameters = '?with_counts=true';

const checkStatus = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	}
	return Promise.reject(new Error(response.statusText));
};

const toJson = (response) => response.json();

const fetchDiscordInvite = (inviteCode) =>
	fetch(`${endpoint}${inviteCode}${queryParameters}`)
		.then(checkStatus)
		.then(toJson);

export default fetchDiscordInvite;
