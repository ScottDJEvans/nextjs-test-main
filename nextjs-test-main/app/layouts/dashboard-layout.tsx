import ActiveAnimals from "@/app/components/active-animals";

export default function DashboardLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className={`flex gap-4  p-4 md:p-10`}>
            <main className={`max-w-[50%] w-full flex-shrink-0 bg-gray-200 rounded-lg p-4`}>
                <h3 className="text-2xl font-bold">All <br className={'block md:hidden'}/> Animals</h3>
                {children}
            </main>
            <div className={`max-w-[50%] w-full bg-gray-300 rounded-lg p-4`}>
                <ActiveAnimals />
            </div>
        </div>
    );
}