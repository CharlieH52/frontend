'use client';
import { sendBackendMessage } from '@/services/backOuijaService';
import useAppStore from '@/store/useAppStore';
import styles from '@/styles/InputSection.module.css';

export default function InputSection() {
    const setMessage = useAppStore((state) => state.setMessage);
    const message = useAppStore((state) => state.message);
    const writeResponse = useAppStore((state) => state.writeResponse);
    const personality = useAppStore((state) => state.personality);
    const language = useAppStore((state) => state.language);
    const error = useAppStore((state) => state.error);
    const setError = useAppStore((state) => state.setError);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            setError('Por favor, escribe un mensaje para invocar al mas allá');
            return;
        }

        const data = await sendBackendMessage(message, { personality, language });
        writeResponse(data.response, data.personality, data.language);
    };
    return (
        <form className={styles.UserInput} onSubmit={handleSubmit}>
            <input
                className={styles.UserInput__Input}
                type="text"
                placeholder="Intenta preguntar algo..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {error && <p className={styles.UserInput__InputError}>{error}</p>}
            <button className={styles.UserInput__InputSubmit} type="submit">
                Invocar
            </button>
        </form>
    );
}
