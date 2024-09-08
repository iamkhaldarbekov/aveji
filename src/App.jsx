import {Header, About, Work, Projects, Reviews, Order} from './sections';

export default function App() {
  return (
    <div className='font-roboto sm:p-[16px] sm:w-screen p-[32px] w-[1440px] mx-auto'>
        <Header />
        <About />
        <Work />
        <Projects />
        <Reviews />
        <Order />
    </div>
  )
}