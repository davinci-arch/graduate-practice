
import Pallete_Data from "../static/pallete.json"
import SoundEffect from '../static/notification.mp3'
import BlockContainer from "./BlockContainer";
import { useState } from "react";

export default function PalletePage({ paletteName }) {

    const currentPallete = Pallete_Data.find((pallete) => pallete.paletteName == paletteName);
    const colors = currentPallete.colors;
    const [color, setNewColor] = useState("#fff")
    const [opacityBox, setNewOpacity] = useState(0);
    const [zindex, setZIndex] = useState(0);
    const [randomPhrase, setRandom] = useState(0);
    const [isSoundOn, setSound] = useState(true);

    const Play = async (color) => {
        if (isSoundOn) {
            var audio = new Audio(SoundEffect)
            audio.play();
        }
        setRandom(Math.floor(Math.random() * 6));

        setNewColor(color);
        setNewOpacity(1);
        setZIndex(1)
        await navigator.clipboard.writeText(color);

        setTimeout(function () {
            setNewOpacity(0);
        }, 700);
        setTimeout(function () {
            setZIndex(0);
        }, 1000);
    }

    return (
        <div className="fixed w-full h-full overflow-hidden">
            <BlockContainer color={color} opacityBlock={opacityBox} index={zindex} random={randomPhrase} />
            <header className="top-0 absolute w-full bg-white h-[50px] leading-[45px] py-0 px-[20px] box-border">
                <a href="/" className="float-left text-black">
                    <span className="font-bold mr-[7px]">←</span>
                    Back
                </a>
                <div className="block absolute left-[50%] ml-[-135px] top-[7px] ">
                    <div className="bg-black rounded-[4px] w-[270px] h-[36px] leading-[34px] text-center text-white text-[15px] font-semibold cursor-pointer select-none">
                        <span>Copy Format: HEX (#AA1923) </span>
                    </div>
                </div>
                <div className="float-right text-black cursor-pointer" onClick={() => setSound(!isSoundOn)}>
                    <span>Sound On {isSoundOn ? '🔊' : '🔇'}</span>
                </div>
            </header>
            <div className="absolute bg-red w-full h-[calc(100%-40px)] top-[50px] select-none">
                {colors.map((color, idx) => (
                    <div key={idx} className="w-[20%] float-left h-[25%] relative cursor-pointer group" style={{ backgroundColor: color.color }}
                        onClick={() => Play(color.color)}>
                        <a href="" className="w-[100px] h-[40px] inline-block text-center leading-[45px] text-white rounded-[5px] border-[2px] border-solid border-white/[.3] opacity-0 absolute left-1/2 top-1/2 ml-[-50px] mt-[-22.5px]  pointer-events-none group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                            COPY
                        </a>
                        <span className="absolute bottom-[8px] text-white opacity-90 uppercase right-[8px]">{color.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}