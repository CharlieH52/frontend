import styles from "./page.module.css";
import OuijaBoard from "@/components/OuijaBoard.jsx";

export default function Home() {
	console.log({ styles });
	return (
		<div className={styles.container}>
			<OuijaBoard />
		</div>
	);
}
