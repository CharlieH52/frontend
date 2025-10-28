import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { sendBackendMessage } from '../services/backOuijaService';

const useAppStore = create()(
    devtools(
        persist(
            (set, get) => ({
                message: '',
                response: null,
                currentLetter: '',
                loading: false,
                error: null,

                setMessage: (message) => set({ message }),
                setLetter: (letter) => set({ currentLetter: letter }),
                setResponse: (response) => set({ response }),
                clearResponse: () => set({ response: null, error: null }),

                /**
                 * Envía el mensaje al backend Nest (POST /ouija/ask)
                 * @param {string} question - Mensaje a enviar (si no se pasa, usa state.message)
                 * @param {{ personality?: string, language?: string }} opts - Opciones de personalidad e idioma
                 * @returns {Promise<object>} Respuesta del backend
                 */
                sendMessage: async (question, opts = {}) => {
                    const q = question ?? get().message;

                    set({ loading: true, error: null });
                    try {
                        const data = await sendBackendMessage(q, opts);
                        set({ response: data, loading: false });
                        return data;
                    } catch (err) {
                        set({
                            error: err?.message || 'Error enviando mensaje',
                            loading: false,
                        });
                        throw err;
                    }
                },
            }),
            { name: 'ouija-storage' }
        )
    )
);

export default useAppStore;
