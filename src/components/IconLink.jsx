import styles from "@/styles/IconLink.module.css";
import Image from "next/image";
import Link from "next/link";

export default function IconLink({url, img_src, img_alt, caption}) {
    return (
        <Link className={styles.IconLink} href={url} target="_blank">
            <figure className={styles.IconLink__Figure}>
                <Image className={styles.IconLink__Image} src={img_src} alt={img_alt} />
            </figure>
        </Link>
    );
}