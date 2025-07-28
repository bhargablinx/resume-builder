export function TemplatePreview({ id, sectionOrder, onSelect }) {
    return (
        <div
            className="border rounded p-2 cursor-pointer hover:shadow-md transition-all w-[200px]"
            onClick={() => onSelect(id)}
        >
            <h4 className="font-semibold text-sm mb-1 text-center">
                Template {id}
            </h4>
            <div className="text-xs flex flex-col items-start gap-1">
                {sectionOrder.map((section, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded">
                        {section}
                    </span>
                ))}
            </div>
        </div>
    );
}
