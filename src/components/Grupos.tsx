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

		for (let i = 0; i < 8; i++) {
			const timeSorteado1 = shuffledPote1.pop()?.name;
			const timeSorteado2 = shuffledPote2.pop()?.name;
			const timeSorteado3 = shuffledPote3.pop()?.name;
			const timeSorteado4 = shuffledPote4.pop()?.name;

			if (timeSorteado1 && timeSorteado2 && timeSorteado3 && timeSorteado4) {
				updatedGroups[i].teams.push(timeSorteado1);
				updatedGroups[i].teams.push(timeSorteado2);
				updatedGroups[i].teams.push(timeSorteado3);
				updatedGroups[i].teams.push(timeSorteado4);
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
