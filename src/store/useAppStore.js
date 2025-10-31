import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { letters, numbers, options, specialChars } from '../global';

const useAppStore = create()(
    devtools((set, get) => ({
        message: '',
        response: null,
        personality: null,
        language: null,
        currentLetter: '',
        loading: false,
        error: null,
        allKeys: [...letters, ...numbers, ...options],
        planchettePosition: { x: null, y: null },
        planchetteVisibility: false,
        modal: false,

        setMessage: (message) => set({ message }),
        setLetter: (letter) => set({ currentLetter: letter }),
        setResponse: (response) => set({ response }),
        setPersonality: (personality) => set({ personality }),
        setLanguage: (language) => set({ language }),
        clearResponse: () => set({ response: null, error: null }),
        setAllKeys: (keys) => set({ allKeys: keys }),
        setError: (error) => set({ error }),
        setPlanchettePosition: (position) => {
            set({ planchettePosition: position, planchetteVisibility: true });
        },
        changeModal: () => {
            const open = !get().modal;
            set({modal: open});
        },

        writeResponse: async (response, personality, language) => {
            console.log(response);
            const chars = response.split('');
            console.log(response);
            set({ response: '', error: null });
            const allKeys = get().allKeys;

            for (const l of chars) {
                const upper = l.toUpperCase();
                set({ response: get().response + l });
                if (allKeys.includes(upper)) {
                    set({ currentLetter: upper });
                } else if (Object.keys(specialChars).includes(upper)) {
                    set({ currentLetter: specialChars[upper] });
                }
                await new Promise((res) => setTimeout(res, 800));
            }

            set({ currentLetter: 'ADIOS', personality, language });
        },
    }))
);

export default useAppStore;
