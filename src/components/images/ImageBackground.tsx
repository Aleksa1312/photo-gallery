import { FC } from "react";

import Image from "next/image";

interface ImageBackgroundProps {
    bg: string; // url object pointing to the image url
    className: string; // extends tailwindcss properties of the background
}

const ImageBackground: FC<ImageBackgroundProps> = ({ bg, className }) => {
    return (
        <Image
            className={`${className} fixed top-0 left-0 h-full w-full object-cover`}
            src={bg}
            width={1920}
            height={1080}
            alt="background image"
        ></Image>
    );
};

export default ImageBackground;
