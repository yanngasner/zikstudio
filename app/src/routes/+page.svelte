<script lang="typescript">
	import { Note, getFrequency, getNoteFromKey } from './note';

	let audioContext: AudioContext;

	const playNote = (note: Note) => {
		if (!audioContext) {
			audioContext = new AudioContext();
		}

		var analyser = audioContext.createAnalyser();

		var osc = audioContext.createOscillator();
		var gainNode = audioContext.createGain();
		gainNode.gain.linearRampToValueAtTime(0.6, audioContext.currentTime + 0.1);
		gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
		console.log(getFrequency(note));
		osc.frequency.value = getFrequency(note);
		osc.type = 'triangle';
		osc.start(audioContext.currentTime);
		osc.stop(audioContext.currentTime + 1);
		osc.connect(gainNode);
		//osc.connect(analyser);
		gainNode.connect(audioContext.destination);
	};

	const handleKeydown = (e: KeyboardEvent) => {
		const note = getNoteFromKey(e.key);
		if (note !== null) {
			playNote(note);
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />
<button on:click={() => playNote(Note.DO)}> DO </button>
<button on:click={() => playNote(Note.RE)}> RE </button>
<button on:click={() => playNote(Note.MI)}> MI </button>
<button on:click={() => playNote(Note.FA)}> FA </button>
<button on:click={() => playNote(Note.SOL)}> SOL </button>
<button on:click={() => playNote(Note.LA)}> LA </button>
<button on:click={() => playNote(Note.SI)}> SI </button>
