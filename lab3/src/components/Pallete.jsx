
import Pallete_Data from "../static/pallete.json";

export default function Pallete({ paletteName }) {

    const currentPallete = Pallete_Data.find((pallete) => pallete.paletteName == paletteName);
    const colors = currentPallete.colors;
    
    return (

        <div className="w-full mb-[40px]">
            <a href={currentPallete.id} className="block w-full h-[200px] bg-white rounded-[4px] py-0 px-[10px] box-border pt-[9px]">
                <div className="w-full h-[calc(100%-40px)] float-left">
                    <div className="rounded-[4px] overflow-hidden h-[calc(100%-5px)]">
                        {colors.map((color) => (
                            <div className="w-[20%] float-left h-[25%]" style={{ backgroundColor: color.color }}></div>
                        ))}
                    </div>

                    <div className="text-black text-[15px] font-semibold h-[40px] leading-[40px] float-left w-full text-left indent-0.5 tracking-[.55px]">
                        {paletteName}
                        <span className="float-right inline-block mr-[4px] text-[20px]">{paletteName.emoji}</span>
                    </div>
                </div>
            </a>
        </div>

    )

}