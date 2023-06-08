import Image from 'next/image';
import LeftBar from './left-bar';
import RightBar from './right-bar';

export default function Home() {
  return (
    <><LeftBar></LeftBar>
      <RightBar></RightBar>
    <main className=' bg-slate-400 h-20'>
      <div className=' bg-slate-400 pl-16 '>
        <h1 className=' pl-8 pt-5 font-extrabold text-3xl'>What's That Color</h1>
      </div>
    </main>
    
    <div>
      <h1 className=' text-[#BF40BF]'>Purple</h1>
    </div>
    
    </>
    
  );
}
