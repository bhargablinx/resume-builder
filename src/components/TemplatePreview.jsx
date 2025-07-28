export function TemplatePreview({ id, sectionOrder, onSelect }) {
    return (
        <div
            className="w-[240px] border border-dark-red rounded-lg hover:shadow-md transition-all bg-white cursor-pointer"
            onClick={() => onSelect(id)}
        >
            <div className="border-b border-gray-200 px-4 py-2">
                <h4 className="text-center text-base font-semibold text-gray-800">
                    Template {id}
                </h4>
            </div>

            <div className="p-4 space-y-2">
                {sectionOrder.map((section, idx) => (
                    <div
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md"
                    >
                        {section}
                    </div>
                ))}
            </div>
        </div>
    );
}
