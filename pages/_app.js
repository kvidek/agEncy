import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';
import Layout from '../components/Layout';
import '../styles/style.scss';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Navigation />
            <SwitchTransition>
                <Transition
                    key={router.pathname}
                    timeout={500}
                    in={true}
                    onEnter={enter}
                    onExit={exit}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Transition>
            </SwitchTransition>
        </>
    );
}

export default MyApp;

const enter = node => {
    gsap.from(node, {
        duration: 0.6,
        y: -60,
        autoAlpha: 0,
        ease: 'expo.out',
    });
};

const exit = node => {
    gsap.to(node, {
        duration: 0.2,
        y: 20,
        autoAlpha: 0,
        ease: 'expo.in',
    });
};
