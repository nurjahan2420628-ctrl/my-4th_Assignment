import type { Technology } from "./TechnologyCard";

interface YourStackProps {
  selectedStack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  selectedStack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      {/* Heading */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedStack.length}{" "}
            {selectedStack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {selectedStack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      <div className="mt-6">

        
        {selectedStack.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-200 px-4 py-12 text-center">

           

            <h3 className="font-semibold text-gray-700">
              Your stack is empty
            </h3>

            
          </div>
        ) : (
          <div className="space-y-3">

            {selectedStack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3"
              >
                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-9 w-9 object-contain"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {technology.name}
                    </h4>

                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default YourStack;