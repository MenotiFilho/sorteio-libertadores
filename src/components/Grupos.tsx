import React, { useState } from 'react';
import teams from './Teams';

interface Group {
	name: string;
	teams: string[];
}

const initialGroups: Group[] = [
	{ name: 'A', teams: [] },
	{ name: 'B', teams: [] },
	{ name: 'C', teams: [] },
	{ name: 'D', teams: [] },
	{ name: 'E', teams: [] },
	{ name: 'F', teams: [] },
	{ name: 'G', teams: [] },
	{ name: 'H', teams: [] },
];

function Grupos() {
	const [groups, setGroups] = useState<Group[]>(initialGroups);

	function Sortear() {
		groups.forEach((group) => (group.teams = []));

		const pote1 = teams.filter((team) => team.pot === 1);
		const pote2 = teams.filter((team) => team.pot === 2);
		const pote3 = teams.filter((team) => team.pot === 3);
		const pote4 = teams.filter((team) => team.pot === 4);

		const shuffledPote1 = shuffleArray(pote1);
		const shuffledPote2 = shuffleArray(pote2);
		const shuffledPote3 = shuffleArray(pote3);
		const shuffledPote4 = shuffleArray(pote4);

		const updatedGroups = [...initialGroups];

		// Find and remove the team with isHolder = true from its pot
		const holderTeam = shuffledPote1.find((team) => team.isHolder);
		if (holderTeam) {
			const holderTeamIndex = shuffledPote1.indexOf(holderTeam);
			shuffledPote1.splice(holderTeamIndex, 1);
		}

		// Add the holder team to group A

		for (let i = 0; i < groups.length; i++) {
			// Start from group A

			// Add the holder team as the first team in group A
			if (groups[i].name === 'A') {
				const timeSorteado2 = shuffledPote2.pop();
				const timeSorteado3 = shuffledPote3.pop();
				const timeSorteado4 = shuffledPote4.pop();
				groups[i].teams.push(holderTeam.name);
				groups[i].teams.push(timeSorteado2.name);
				groups[i].teams.push(timeSorteado3.name);
				groups[i].teams.push(timeSorteado4.name);
			} else {
				const timeSorteado1 = shuffledPote1.pop();
				const timeSorteado2 = shuffledPote2.pop();
				const timeSorteado3 = shuffledPote3.pop();
				const timeSorteado4 = shuffledPote4.pop();
				if (
					timeSorteado1.nacionalidade === timeSorteado2.nacionalidade ||
					timeSorteado3.nacionalidade ||
					timeSorteado4.nacionalidade
				) {
				}
				groups[i].teams.push(timeSorteado1.name);
				groups[i].teams.push(timeSorteado2.name);
				groups[i].teams.push(timeSorteado3.name);
				groups[i].teams.push(timeSorteado4.name);
			}
		}

		setGroups(updatedGroups);
	}

	function shuffleArray(array: any[]) {
		const shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	}

	return (
		<div className="flex flex-col gap-6">
			<button className="self-start" onClick={Sortear}>
				Sortear
			</button>
			<div className="grid grid-cols-4 gap-5">
				{groups.map((group) => (
					<div className="flex flex-col gap-1" key={group.name}>
						<h2>Grupo {group.name}</h2>
						<ul>
							{group.teams.map((team, index) => (
								<li key={index}>{team}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default Grupos;
