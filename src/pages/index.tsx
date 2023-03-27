import LargeSearch from "@/components/search/LargeSearch";
import LargeHeading from "@/components/text/LargeHeading";
import SmallHeading from "@/components/text/SmallHeading";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-indigo-800 to-slate-900 backdrop-blur-3xl">
            <div className="page-content flex max-w-xs flex-col items-center justify-center md:max-w-md lg:max-w-lg">
                <section className="mb-36 flex w-full flex-col items-center gap-10">
                    <span className="flex flex-col items-center text-center">
                        <LargeHeading>ShareIt</LargeHeading>
                        <SmallHeading className="opacity-70">Share your best experiences</SmallHeading>
                    </span>
                    <LargeSearch
                        className="rounded duration-200 hover:brightness-125 focus:brightness-125"
                        placeholder="Search for images..."
                    />
                </section>
            </div>
        </div>
    );
};

export default HomePage;
