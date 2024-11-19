import AnimalList from "@/app/components/animal-list";

export default function ActiveAnimals() {
    return (
        <div className={`flex flex-col gap-2`}>
            <h3 className="text-2xl font-bold">Active Animals</h3>

            <AnimalList showOnlyActive={true} />
        </div>
    )
}