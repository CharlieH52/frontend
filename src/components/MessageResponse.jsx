'use client';
import useAppStore from '@/store/useAppStore';
import styles from '@/styles/OuijaBoard.module.css';

export default function MessageResponse() {
    const response = useAppStore((state) => state.response);
    return (
        <span className={styles.OuijaBoard__Response}>
            <p className={styles.OuijaBoard__ResponseText}>
                {response || 'Respuesta desde el mas allá...'}
            </p>
        </span>
    );
}
