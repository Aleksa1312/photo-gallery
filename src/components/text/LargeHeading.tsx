import { FC } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const LargeHeading: FC<HeadingProps> = (props) => {
    return <h1 className={`text-6xl font-bold lg:text-7xl ${props.className}`}>{props.children}</h1>;
};

export default LargeHeading;
