export enum Note {
	DO,
	RE,
	MI,
	FA,
	SOL,
	LA,
	SI
}

export function getFrequency(note: Note) {
	switch (note) {
		case Note.DO:
			return 261.63;
		case Note.RE:
			return 293.66;
		case Note.MI:
			return 329.63;
		case Note.FA:
			return 349.23;
		case Note.SOL:
			return 392.0;
		case Note.LA:
			return 440;
		case Note.SI:
			return 493.88;
		default:
			break;
	}
}

export function getNoteFromKey(key: string) {
	switch (key) {
		case 'd':
			return Note.DO;
		case 'f':
			return Note.RE;
		case 'g':
			return Note.MI;
		case 'h':
			return Note.FA;
		case 'j':
			return Note.SOL;
		case 'k':
			return Note.LA;
		case 'l':
			return Note.SI;
		default:
			return null;
	}
}
