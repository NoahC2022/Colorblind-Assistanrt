import Image from "next/image";
import leftTriangle from './assets/triangle_left.png';

const LeftTriangle = (props) => {
    return (
        <Image
            src={leftTriangle}
            alt="Triangle Selector"
            width="86px"
            height="86px"
        />
        )
}

const LeftBar = () => {
    return (
        <div className=" fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-gradient-to-t from-purple-400 to-yellow-400">
            <div className=" h-screen relative flex items-center justify-center mx-auto">
                <LeftTriangle class=" object-center" />
            </div>
        </div>
    )
};

export default LeftBar;