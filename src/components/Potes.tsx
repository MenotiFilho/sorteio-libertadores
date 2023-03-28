import React from 'react';
import teams from './Teams';

function Potes() {
	const pote1Teams = teams.filter((team) => team.pot === 1);
	const pote2Teams = teams.filter((team) => team.pot === 2);
	const pote3Teams = teams.filter((team) => team.pot === 3);
	const pote4Teams = teams.filter((team) => team.pot === 4);
	return (
		<div className="flex ">
			<div>
				<h1>Times do Pote 1</h1>
				<ul>
					{pote1Teams.map((team) => (
						<li key={team.name}>
							<strong>{team.name}</strong> - Rank:{team.rank ?? 'Sem Rank'} -
							Pot:
							{team.pot} {team.isHolder ? '- Atual Campeão' : ' '}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h1>Times do Pote 2</h1>
				<ul>
					{pote2Teams.map((team) => (
						<li key={team.name}>
							<strong>{team.name}</strong> - Rank:{team.rank ?? 'Sem Rank'} -
							Pot:
							{team.pot}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h1>Times do Pote 3</h1>
				<ul>
					{pote3Teams.map((team) => (
						<li key={team.name}>
							<strong>{team.name}</strong> - Rank:{team.rank ?? 'Sem Rank'} -
							Pot:
							{team.pot}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h1>Times do Pote 4</h1>
				<ul>
					{pote4Teams.map((team) => (
						<li key={team.name}>
							<strong>{team.name}</strong> - Rank:{team.rank ?? 'Sem Rank'} -
							Pot:
							{team.pot}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Potes;
