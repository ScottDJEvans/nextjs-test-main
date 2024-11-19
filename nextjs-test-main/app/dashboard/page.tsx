import AnimalList from "@/app/components/animal-list";
import DashboardLayout from "@/app/layouts/dashboard-layout";

export default function Page() {
    return (
        <DashboardLayout>
            <AnimalList />
        </DashboardLayout>
    );
}