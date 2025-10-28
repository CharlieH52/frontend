'use client';

import { useRef } from 'react';
import useAppStore from '@/store/useAppStore';
import styles from '@/styles/OuijaBoard.module.css';
import Image from 'next/image';
import Planchette from './Planchette';
import { letters, numbers } from '@/global';
import MessageResponse from './MessageResponse';

export default function OuijaBoard() {
    const spanRefs = useRef({});
    const boardRef = useRef(null);
    const letter = useAppStore((state) => state.currentLetter);
    const letters1 = letters.slice(0, 13);
    const letters2 = letters.slice(13);

    return (
        <div className={styles.OuijaBoard} ref={boardRef}>
            <Planchette visible={!!letter} boardRef={boardRef} spanRefs={spanRefs} char={letter} />
            <Image
                className={styles.OuijaBoard__Background}
                width={1920}
                height={1080}
                alt=""
                src="/assets/images/paper-texture.jpg"
            />
            <div className={styles.OuijaBoard__CornerLayout}>
                <Image
                    className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--TopLeft']}`}
                    width={512}
                    height={512}
                    alt="Sun symbol"
                    src="/assets/images/sun-corner.svg"
                />
                <Image
                    className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--BotLeft']}`}
                    width={512}
                    height={512}
                    alt="Star symbol"
                    src="/assets/images/star-corner.svg"
                />
                <Image
                    className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--TopRight']}`}
                    width={512}
                    height={512}
                    alt="Moon symbol"
                    src="/assets/images/moon-corner.svg"
                />
                <Image
                    className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--BotRight']}`}
                    width={512}
                    height={512}
                    alt="Star symbol"
                    src="/assets/images/star-corner.svg"
                />
            </div>
            <div className={styles.OuijaBoard__Layout} ref={boardRef}>
                <div className={styles.OuijaBoard__LayoutHeader}>
                    <span
                        className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Yes']}`}
                        ref={(el) => (spanRefs.current['SI'] = el)}
                    >
                        Si
                    </span>

                    <MessageResponse />

                    <span
                        className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--No']}`}
                        ref={(el) => (spanRefs.current['NO'] = el)}
                    >
                        No
                    </span>
                </div>
                <div className={styles.OuijaBoard__LayoutMain}>
                    <div className={styles.OuijaBoard__Line}>
                        {letters1.map((letter) => (
                            <span
                                key={letter}
                                className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}
                                ref={(el) => (spanRefs.current[letter] = el)}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                    <div className={styles.OuijaBoard__Line}>
                        {letters2.map((letter) => (
                            <span
                                key={letter}
                                className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}
                                ref={(el) => (spanRefs.current[letter] = el)}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                    <div className={styles.OuijaBoard__Line}>
                        {/* TODO: Create space separator */}
                        <span
                            className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Bye']}`}
                            ref={(el) => (spanRefs.current['-'] = el)}
                        >
                            ___
                        </span>
                    </div>
                </div>
                <div className={styles.OuijaBoard__LayoutFooter}>
                    <div className={styles.OuijaBoard__Numbers}>
                        {numbers.map((number) => (
                            <span
                                key={number}
                                className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}
                                ref={(el) => (spanRefs.current[number] = el)}
                            >
                                {number}
                            </span>
                        ))}
                    </div>

                    <span
                        className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Bye']}`}
                        ref={(el) => (spanRefs.current['ADIOS'] = el)}
                    >
                        Adios
                    </span>
                </div>
            </div>
        </div>
    );
}
