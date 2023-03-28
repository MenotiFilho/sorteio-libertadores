export type Time = {
	name: string;
	rank?: number;
	pot: number;
	isHolder?: boolean;
	nacionalidade: string;
	isFromPre?: boolean;
};

const teams: Time[] = [
	{
		name: 'Flamengo',
		rank: 3,
		pot: 1,
		isHolder: true,
		nacionalidade: 'BRASIL',
	},
	{ name: 'River Plate', rank: 1, pot: 1, nacionalidade: 'ARGENTINA' },
	{ name: 'Palmeiras', rank: 2, pot: 1, nacionalidade: 'BRASIL' },
	{ name: 'Boca Juniors', rank: 4, pot: 1, nacionalidade: 'ARGENTINA' },
	{ name: 'Nacional', rank: 6, pot: 1, nacionalidade: 'Uruguai' },
	{ name: 'Athletico-PR', rank: 7, pot: 1, nacionalidade: 'BRASIL' },
	{ name: 'Ind. del Valle', rank: 11, pot: 1, nacionalidade: 'EQUADOR' },
	{ name: 'Olimpia', rank: 14, pot: 1, nacionalidade: 'PARAGUAI' },
	{ name: 'Libertad', rank: 16, pot: 2, nacionalidade: 'PARAGUAI' },
	{ name: 'Atlético Nacional', rank: 17, pot: 2, nacionalidade: 'COLÔMBIA' },
	{ name: 'Internacional', rank: 18, pot: 2, nacionalidade: 'BRASIL' },
	{ name: 'Barcelona', rank: 19, pot: 2, nacionalidade: 'EQUADOR' },
	{ name: 'Racing', rank: 22, pot: 2, nacionalidade: 'ARGENTINA' },
	{ name: 'Corinthians', rank: 24, pot: 2, nacionalidade: 'BRASIL' },
	{ name: 'Colo-Colo', rank: 28, pot: 2, nacionalidade: 'CHILE' },
	{ name: 'Fluminense', rank: 32, pot: 2, nacionalidade: 'BRASIL' },
	{ name: 'Bolívar', rank: 33, pot: 3, nacionalidade: 'BOLÍVIA' },
	{ name: 'The Strongest', rank: 38, pot: 3, nacionalidade: 'BOLÍVIA' },
	{ name: 'Melgar', rank: 44, pot: 3, nacionalidade: 'PERU' },
	{ name: 'Alianza Lima', rank: 52, pot: 3, nacionalidade: 'PERU' },
	{ name: 'Argentinos Jrs.', rank: 55, pot: 3, nacionalidade: 'ARGENTINA' },
	{ name: 'Metropolitanos', rank: 97, pot: 3, nacionalidade: 'VENEZUELA' },
	{ name: 'Aucas', rank: 112, pot: 3, nacionalidade: 'EQUADOR' },
	{ name: 'Monagas', rank: 133, pot: 3, nacionalidade: 'VENEZUELA' },
	{ name: 'Liverpool', rank: 165, pot: 4, nacionalidade: 'URUGUAI' },
	{ name: 'Deportivo Pereira', rank: 205, pot: 4, nacionalidade: 'COLÔMBIA' },
	{ name: 'Ñublense', rank: 230, pot: 4, nacionalidade: 'CHILE' },
	{ name: 'Patronato', pot: 4, nacionalidade: 'ARGENTINA' },
	{
		name: 'Atlético-MG',
		rank: 11,
		pot: 4,
		nacionalidade: 'BRASIL',
		isFromPre: true,
	},
	{
		name: 'Sporting Cristal',
		rank: 35,
		pot: 4,
		nacionalidade: 'PERU',
		isFromPre: true,
	},
	{
		name: 'Cerro Porteño',
		rank: 15,
		pot: 4,
		nacionalidade: 'PARAGUAI',
		isFromPre: true,
	},
	{
		name: 'Independente Medellín',
		rank: 54,
		pot: 4,
		nacionalidade: 'COLÔMBIA',
		isFromPre: true,
	},
];

export default teams;
