import {  PulseLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-brand-blue-dark flex justify-center items-center">

            <PulseLoader color="#36d7b7" />

        </div>
    )
}