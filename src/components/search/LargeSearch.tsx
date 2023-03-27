import { FC } from "react";
import SearchIcon from "../icons/SearchIcon";

interface LargeSearchProps extends React.HTMLAttributes<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const LargeSearch: FC<LargeSearchProps> = (props) => {
    return (
        <div className="relative flex w-full items-center">
            <SearchIcon className="absolute left-2" size={25} />
            <input
                className={`${props.className} w-full bg-black/50 px-5 py-2 pl-12 outline-none`}
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default LargeSearch;
