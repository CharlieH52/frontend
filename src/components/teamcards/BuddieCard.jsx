import Link from "next/link";
import GitHubIcon from "@/components/socials/GitHunIcon.jsx";
import LinkedinIcon from "@/components/socials/LinkedinIcon.jsx";
import style from "@/styles/BuddieCard.module.css";

export default function BuddieCard({name, github, linkedin}) {
    return(
        <>
            <article className={style.BuddieCard}>
                <span className={style.BuddieCard__BuddieName}>
                    <p className={style.BuddieCard__Text}>{name}</p>
                </span>
                <div className={style.BuddieCard__SocialGrid}>
                    <Link href={github} target="_blank">
                        <GitHubIcon />
                    </Link>
                    <Link href={linkedin} target="_blank">
                        <LinkedinIcon />
                    </Link>
                </div>
            </article>
        </>
    )
}