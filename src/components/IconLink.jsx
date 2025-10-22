import styles from "@/styles/IconLink.module.css";

export default function IconLink({url, img_src, img_alt, caption}) {
    return (
        <a className={styles.IconLink} href={url} target="_blank">
            <figure className={styles.IconLink__Figure}>
                <img className={styles.IconLink__Image} src={img_src} alt={img_alt} />
            </figure>
        </a>
    );
}