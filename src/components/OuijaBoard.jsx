'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/OuijaBoard.module.css';
import Image from 'next/image';
import Planchette from './Planchette';

export default function OuijaBoard() {
    const [currentChar, setCurrentChar] = useState('');
    const [frase, setFrase] = useState('');
    const spanRefs = useRef({});
    const boardRef = useRef(null);
    const letters = 'ABCDEFGHIJKLM'.split('');
    const letters2 = 'NOPQRSTUVWXYZ'.split('');
    const numbers = '1234567890'.split('');
    const options = ['SI', 'NO', 'ADIOS'];
    const allKeys = [...options, ...letters, ...numbers];
    const specialChars = {
        Ñ: 'N',
        Á: 'A',
        É: 'E',
        Í: 'I',
        Ó: 'O',
        Ú: 'U',
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = frase.toUpperCase();

        const chars = options.includes(value) ? [value] : value.split('');

        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            if (allKeys.includes(char)) {
                setCurrentChar(char);
                await new Promise((res) => setTimeout(res, 800));
            }
            if (Object.keys(specialChars).includes(char)) {
                setCurrentChar(specialChars[char]);
                await new Promise((res) => setTimeout(res, 800));
            }
        }
    };

    useEffect(() => {
        setInterval(() => {
            setCurrentChar('A');
        }, 2000);
    }, []);

    return (
        <div className={styles.OuijaBoard} ref={boardRef}>
            <Planchette
                visible={!!currentChar}
                boardRef={boardRef}
                spanRefs={spanRefs}
                char={currentChar}
            />
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
                    <span className={styles.OuijaBoard__Response}>
                        <p className={styles.OuijaBoard__ResponseText}>
                            Respuesta desde el mas allá...
                        </p>
                    </span>
                    <span
                        className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--No']}`}
                        ref={(el) => (spanRefs.current['NO'] = el)}
                    >
                        No
                    </span>
                </div>
                <div className={styles.OuijaBoard__LayoutMain}>
                    <div className={styles.OuijaBoard__Line}>
                        {letters.map((letter) => (
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
