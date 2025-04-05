import Pallete from "./Pallete"
import { NavLink } from "react-router-dom"
export default function Content() {

    return (
        <div className="w-full min-h-screen float-left bg-[#3c40c6] block bg-[url('https://flatuicolors.com/static/img/stars-opacity.0979c1.svg')] bg-cover">
            <div className="w-[1024px] my-0 mx-auto flex flex-col">
                <div className="block w-[1024px] text-left relative h-[65px] box-border mb-[15px]">
                    <div className="flex justify-center float-left h-[105px] w-full">
                        <a href="#" className="text-[24px] text-white absolute left-[2px] bottom-[5px] tracking-[2.5px] font-semibold select-none origin-[0%_50%]">FLAT UI COLORS 2</a>
                        <div className="absolute right-0 bottom-[5px] mr-[2px] font-bold tracking-[1px] ">
                            <a href="#" className="ml-[40px] font-semibold text-[17px] text-white inline-block relative">
                                Free Youtube Downloader App
                                <span className="bg-[#FF0000] text-[14px] font-bold py-[2px] px-[4px] pl-[6px] rounded-[4px] ml-[8px]">NEW</span>
                            </a>
                            <a href="#" className="ml-[40px] font-semibold text-[17px] text-white inline-block relative">
                                Portfolio Inspiration
                            </a>
                            <a href="#" className="ml-[40px] font-semibold text-[17px] text-white inline-block relative">
                                Subscribe
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-x-12">
                    <Pallete paletteName="Material UI Colors" />
                    <Pallete paletteName="Flat UI Colors v1" />
                    <Pallete paletteName="Flat UI Colors Dutch" />
                    <Pallete paletteName="Flat UI Colors American" />
                    <Pallete paletteName="Flat UI Colors Aussie" />
                    <Pallete paletteName="Flat UI Colors British" />
                    <Pallete paletteName="Flat UI Colors Spanish" />
                    <Pallete paletteName="Flat UI Colors Indian" />
                    <Pallete paletteName="Flat UI Colors French" />
                </div>



            </div>
        </div>


    )

}