import Header from '@/app/components/Header';
import AboutMe from './components/AboutMe';
import ContentTabs from './components/ContentTabs';


export default function Home() {

    return (
        <div className="container" id="home">
            <Header />
            <main>
                <AboutMe />
                <ContentTabs />
            </main>
        </div>
    )
}