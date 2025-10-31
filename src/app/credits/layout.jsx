import style from "@/app/credits/credits.module.css";
import corners from "@/styles/Corners.module.css";
import SunCorner from "@/components/corners/SunCorner.jsx";
import MoonCorner from "@/components/corners/MoonCorner.jsx";
import RightStarCorner from "@/components/corners/RightStarCorner.jsx";
import LeftStarCorner from "@/components/corners/LeftStarCorner.jsx";
import DevathonIcon from "@/components/socials/DevathonIcon.jsx";
import BarbaIcon from "@/components/socials/BarbaIcon.jsx";
import Link from 'next/link';
import BuddieCard from "@/components/teamcards/BuddieCard";
import ControlBar from "@/components/ControlBar";
import SmokeEffect from "@/components/SmokeEffect";

export default function CreditsLayout() {
    return(
        <>
            <ControlBar home={true} credits={false} />
            <main className={style.Credits}>
                <div className={style.Background}></div>
                <div className={corners.OuijaBoard__CornerLayout}>
                    <SunCorner/>
                    <RightStarCorner/>
                    <MoonCorner/>
                    <LeftStarCorner/>
                </div>
                <div className={style.Credits__Board}>
                    <header className={style.Credits__Header}>
                        <h1 className={style.Credits__Title}>ouija virtual</h1>
                    </header>
                    <div className={style.Credits__Container}>
                        <section className={style.Credits__Devathon}>
                            <Link className={style.Credits__DevaLink} target="_blank" href={"https://programacion-es.dev/devathon-x-edition/"}>
                                <DevathonIcon />
                            </Link>
                            <Link className={style.Credits__BarbaLink} target="_blank" href={"https://www.youtube.com/@programacion-es"}>
                                <BarbaIcon />
                            </Link>
                        </section>
                        <section className={style.Credits__Team}>
                            <BuddieCard name={"Javier Zader"} github={"https://github.com/JNZader"} linkedin={"https://www.linkedin.com/in/jnzader/"} />
                            <BuddieCard name={"Roger Parada"} github={"https://github.com/rogerparada"} linkedin={"https://www.linkedin.com/in/rogerparada/"} />
                            <BuddieCard name={"Angel Ocampo"} github={"https://github.com/AngelAlgo262"} linkedin={"https://www.linkedin.com/in/angelocampo262/"} />
                            <BuddieCard name={"Charlie Chan"} github={"https://github.com/CharlieH52"} linkedin={"https://www.linkedin.com/in/charliechan-dev/"} />
                        </section>
                    </div>
                    <div className={style.Spacer}>
                        <span className={style.Spacer__Left}></span>
                        <span className={style.Spacer__Square}></span>
                        <span className={style.Spacer__Right}></span>
                    </div>
                </div>
            </main>
            <SmokeEffect />
        </>
    )
}