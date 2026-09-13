import TechnologyCard from "./TechnologyCard";
import type { Technology } from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  selectedStack: Technology[];
  onAdd: (technology: Technology) => void;
  loading: boolean;
}

function TechnologyGrid({
  technologies,
  selectedStack,
  onAdd,
  loading,
}: TechnologyGridProps) {

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

          <p className="text-gray-500">
            Loading technologies...
          </p>
        </div>
      </div>
    );
  }







  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {

        const isAdded = selectedStack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}








export default TechnologyGrid;