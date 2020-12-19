import {SET_NOTE, CREATE_NOTE, REMOVE_NOTE, SAVE_NOTE, DISPLAY_NOTE, SEARCH_NOTE} from './actions';

const testState = [{title: 'Homeworks', text: `YOU'VE GOT HOMEWORKS TO DO`, isDisplay: false, isMatched: true}, 
                   {title: 'Houseworks', text: `YOU'VE GOT HOUSEWORKS TO DO`, isDisplay: false, isMatched: true}];

export const notes = (state = testState, action) => {
    const {type, payload} = action;
    switch(type){
        case SET_NOTE:{
            return 'NOTES RECEVEIED';
        }
        case CREATE_NOTE: { 
            const newNote = {...payload, isDisplay: false, isMatched: true};
            return state.concat(newNote);
        }
        case REMOVE_NOTE: {
            const {title} = payload;
            return state.filter(note => note.title !== title);
        }
        case SAVE_NOTE: {
            const {title, text} = payload;
            return state.map(note => {
                if(note.title === title){
                    alert(`${title} saved`);
                    return {...note, text: text};
                } else return note;
            });
        }
        case SEARCH_NOTE:{
            const {title} = payload;
            return state.map(note => {
                if(note.title.toLowerCase().includes(title.toLowerCase())){
                    return {...note, isMatched: true};
                } else return {...note, isMatched: false};
            });
        }
        case DISPLAY_NOTE: {
            const {title} = payload;
            return state.map(note => { 
                if(note.title === title){
                    return {...note, isDisplay: true};
                } else return {...note, isDisplay: false};
            });
        }
        default: return state;
    }
}