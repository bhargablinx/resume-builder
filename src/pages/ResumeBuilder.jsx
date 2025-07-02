import { Resume } from "../components/Resume";
import { ResumeControl } from "../components/ResumeControl";

export const ResumeBuilder = () => {
    return (
        <section className="flex gap-2 m-4 justify-between">
            <ResumeControl />
            <Resume />
        </section>
    );
};
