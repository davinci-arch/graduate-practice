
export default function BlockContainer({ color, opacityBlock, index, random }) {
    const phrase = ["COPIED!", "PASTE ME!", "GOT IT!", "WILL DO!", "IT'LL ROCK!", "RIGHT ONE!"]

    return (
        <div className="absolute w-full min-h-screen transition-opacity duration-[600ms] text-white flex flex-col justify-center items-center select-none" style={{ backgroundColor: color, opacity: opacityBlock, zIndex: index }}>
            <div className="bg-white/30 h-[230px] w-full flex justify-center items-center text-[100px]">
                <span className="text-shadow-[2px_1px_0_rgb(0_0_0/1)]">{phrase[random]}</span>
            </div>
            <div className="text-[36px] mt-[50px] drop-shadow-code_text">{color}</div>
        </div>
    )
}