import { FC } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const SmallHeading: FC<HeadingProps> = (props) => {
    return <h1 className={`font-light lg:text-lg ${props.className}`}>{props.children}</h1>;
};

export default SmallHeading;
