import Image from "next/image";
import rightTriangle from './assets/triangle_right.png';

const RightTriangle = (props) => {
    return (
        <Image
            src={rightTriangle}
            alt="Triangle Selector"
            width="86px"
            height="86px"
        />
        )
}

const RightBar = () => {
    return (
        <div className="fixed top-0 right-0 h-screen w-16 m-0 flex flex-col bg-gradient-to-t from-purple-400 to-yellow-400">
            <div className="h-screen relative flex items-center justify-center mx-auto">
                <RightTriangle class="object-center" />
            </div>
        </div>
    )
};

export default RightBar;