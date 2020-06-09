class NotesStore {
    //add your code here
    constructor() {
        this.validStates = ['completed', 'active', 'others']
        this.notes = [];
    }
    addNote(state, name) {
        if(name == '') {
            throw Error('Name cannot be empty');
        }
        if(!this.validStates.includes(state)) {
            throw Error(`Invalid state ${state}`);
        }
        const note = { name, state };
        this.notes.push(note);
    }

    getNotes(state) {
        if(!this.validStates.includes(state)) {
            throw Error(`Invalid state ${state}`);
        }
        const matchingNotes = this.notes.filter(note => note.state === state);
        return matchingNotes.map(note => note.name);
    }
}