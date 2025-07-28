import { Resume } from "../components/Resume";
import { useParams } from "react-router-dom";
import { ResumeControl } from "../components/ResumeControl";

export const ResumeBuilder = () => {
    const param = useParams();

    return (
        <section className="flex gap-2 m-4 justify-between">
            <ResumeControl />
            <Resume templateId={Number(param.id)} />
        </section>
    );
};
