export interface Technology {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
  description: string;
  icon: string;
  rating: number;
  difficulty:
    | "Beginner-Friendly"
    | "Intermediate"
    | "Advanced";
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

     
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      
      <p className="mt-2 grow text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
          {technology.difficulty}
        </span>
      

      
        <span className="mt-0 flex items-center gap-1 text-sm">
        <span className="text-yellow-400">★</span>

        <span className="font-semibold text-gray-700">
          {technology.rating}
        </span>
        </span>
      </div>

      
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;