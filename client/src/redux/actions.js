export const SET_NOTE = 'SET_NOTE';
export const setNote = (notes) => ({
    type: SET_NOTE,
    payload: [...notes]
});

export const CREATE_NOTE = 'CREATE_NOTE';
export const createNote = (title, text) => ({
    type: CREATE_NOTE,
    payload: {title, text}
});

export const REMOVE_NOTE = 'REMOVE_NOTE';
export const removeNote = title => ({
    type: REMOVE_NOTE,
    payload: {title}
});

export const SAVE_NOTE = 'SAVE_NOTE';
export const saveNote = (title, text) => ({
    type: SAVE_NOTE,
    payload: {title, text}
});

export const DISPLAY_NOTE = 'DISPLAY_NOTE';
export const displayNote = title => ({
    type: DISPLAY_NOTE,
    payload: {title}
});

export const SEARCH_NOTE = 'SEARCH_NOTE';
export const searchNote = title => ({
    type: SEARCH_NOTE,
    payload: {title}
})