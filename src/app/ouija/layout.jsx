import '@/globals.css';
import MobileFrame from '@/components/MobileFrame.jsx';
import GlobalAudio from '@/components/GlobalAudio';
import SmokeEffect from '@/components/SmokeEffect';

export default function GameLayout({ children }) {
    return (
        <>
            {/* <GlobalAudio /> */}
            {/* <MobileFrame /> */}
            {/* <SmokeEffect /> */}
            {children}
        </>
    );
}
