import { useDispatch } from "react-redux";
import { selectTemplate } from "../slices/templateSlice";
import { resumeTemplates } from "../utils/TemplateOrder";
import { useNavigate } from "react-router-dom";
import { TemplatePreview } from "../components/TemplatePreview";

function TemplatesPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = (id) => {
        dispatch(selectTemplate(id));
        navigate(`/resume/${id}`);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-6 text-dark-red text-center">
                Choose a Resume Template
            </h2>
            <div className="flex gap-5 flex-wrap mx-[300px]">
                {resumeTemplates.map((template) => (
                    <TemplatePreview
                        key={template.id}
                        id={template.id}
                        sectionOrder={template.sectionOrder}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
}

export default TemplatesPage;
