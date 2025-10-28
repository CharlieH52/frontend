'use client';
import useAppStore from '@/store/useAppStore';
import styles from '@/styles/InputSection.module.css';

export default function InputSection() {
    const setMessage = useAppStore((state) => state.setMessage);
    const message = useAppStore((state) => state.message);
    const sendMessage = useAppStore((state) => state.sendMessage);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        sendMessage(message);
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
            <button className={styles.UserInput__InputSubmit} type="submit">
                Invocar
            </button>
        </form>
    );
}
