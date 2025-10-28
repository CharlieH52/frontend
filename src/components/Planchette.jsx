'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Planchette.module.css';

export default function Planchette({ spanRefs, boardRef, char }) {
    const center = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const placeCenter = center.current.getBoundingClientRect();
        const span = spanRefs.current[char];
        const boardRect = boardRef.current.getBoundingClientRect();

        const { width, height } = placeCenter;
        const letter = span?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const centerX = letter.left + letter.width / 2;
        const centerY = letter.top + letter.height / 2;

        const x = centerX - boardRect.left - width / 2;
        const y = span ? centerY - boardRect.top - height / 2 : centerY - boardRect.top - height;

        setPosition({ x, y });
        setVisible(!!char);
    }, [boardRef, char, spanRefs]);

    return (
        <motion.div
            ref={center}
            style={{
                position: 'absolute',
                top: 0,
                transform: 'translate(-50%, -50%)',
            }}
            className={`${styles.planchette} ${visible ? styles.visible : styles.invisible}`}
            id="Planchette"
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                stiffness: 100,
                damping: 12,
            }}
        >
            <svg
                id="Planchette"
                data-name="Planchette"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
            >
                <path
                    id="Base"
                    className={styles.base}
                    d="M451.11,316.35c-21.41-56.07-53.86-124.89-103.7-196.9C314.32,71.64,280.24,32.07,248.96,0c-34.27,35.69-73.24,82.17-110.26,140.45-44.18,69.55-72.33,135.05-90.57,187.71-13.7,49.4,2.64,101.57,40.69,131.27,38.54,30.07,94.56,22.66,96.88,22.32,30.13-4.39,33.6-16.31,63.26-17.07,32.2-.82,40.25,12.91,75.11,15.51,5.03.38,41.95,2.8,69.28-11.57,49.01-25.76,75.58-105.6,57.76-152.27ZM250,375.23c-69.16,0-125.23-56.07-125.23-125.23s56.07-125.23,125.23-125.23,125.23,56.07,125.23,125.23-56.07,125.23-125.23,125.23Z"
                />
                <path
                    id="Borde_interior"
                    data-name="Borde interior"
                    className={styles.borde_interior}
                    d="M437.23,313.95c-19.93-52.2-50.15-116.27-96.55-183.31-30.81-44.52-62.53-81.35-91.66-111.21-31.9,33.23-68.19,76.5-102.66,130.76-41.13,64.75-67.34,125.73-84.32,174.76-12.75,45.99,2.46,94.56,37.88,122.21,35.88,28,88.04,21.09,90.2,20.78,28.05-4.09,31.28-15.19,58.9-15.89,29.97-.76,37.47,12.02,69.93,14.44,4.68.35,39.06,2.6,64.5-10.77,45.63-23.99,70.36-98.31,53.77-141.76Z"
                />
                <path
                    id="Lente"
                    className={styles.borde_lente}
                    d="M250,124.77c-69.16,0-125.23,56.07-125.23,125.23s56.07,125.23,125.23,125.23,125.23-56.07,125.23-125.23-56.07-125.23-125.23-125.23ZM250,368.97c-65.71,0-118.97-53.26-118.97-118.97s53.26-118.97,118.97-118.97,118.97,53.26,118.97,118.97-53.26,118.97-118.97,118.97Z"
                />
                <path
                    id="Brillo_lente"
                    data-name="Brillo lente"
                    className={styles.brillo_lente}
                    d="M238.29,350.18c-54.16-4.53-95.25-51-93.47-103.62,1.7-50.16,41.91-92.5,93.47-96.75-44.48,13.16-75.13,54.36-74.93,100.63.19,45.95,30.76,86.67,74.93,99.74Z"
                />
            </svg>
        </motion.div>
    );
}
