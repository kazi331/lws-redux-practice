import { useState } from "react";
import { EditIcon } from "../ui/Icons";
import ChatItems from "./ChatIItems";
import Modal from "./Modal";
// import Blank from "./Blank";

export default function Sidebar() {
    const [opened, setOpened] = useState(false);

    const controlModal = () => {
        setOpened((prevState) => !prevState);
    };

    return (
        <div className="w-[100px] border-r border-t-0 border-gray-300 lg:col-span-1 md:w-full">
            <div className="h-[65px] text-center text-grey-500 p-4 border-b border-gray-300 flex md:justify-end justify-center">
                <EditIcon className="w-5 h-5 text-grey-500 cursor-pointer"
                    onClick={controlModal} />
            </div>
            <div className="overflow-auto h-[calc(100vh_-_129px)]">
                <ChatItems />
            </div>
            {/* <Blank /> */}
            <Modal open={opened} control={controlModal} />
        </div>
    );
}
