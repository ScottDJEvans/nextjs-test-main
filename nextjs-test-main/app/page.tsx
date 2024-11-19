import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      <ol className="list-inside flex flex-col gap-4 list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Start by visiting the <strong>/Dashboard</strong> in your browser.
        </li>
        <li>
          There is an API endpoint: <strong>https://673b2e6b339a4ce4451b0018.mockapi.io/apiv1/v1/animals</strong>, which returns a list of animals.
        </li>
        <li>
          In the <strong>animal-list.tsx</strong> file, fetch and define the appropriate type structure for the animal data.
        </li>
        <li>
          Display the list of animals in the <strong>AnimalList</strong> component, ensuring that each animal’s background color matches its associated color.
        </li>
        <li>
          There is also an <strong>ActiveAnimals (active-animals.tsx)</strong> component, which should display a filtered list of active animals, similar to how the <strong>AnimalList</strong> component does.
        </li>
        <li>
          The API call should be made in the <strong>AnimalList</strong> component, not within the <strong>ActiveAnimals</strong> component. Once the data is fetched, pass it to <strong>ActiveAnimals</strong> to display only the active animals.
        </li>

        <li>
          The goal is to display the list of animals in the <strong>AnimalList</strong> component and the list of active animals in the <strong>ActiveAnimals</strong> component using only one API call.
          
        </li>
      </ol>


      
      </main>
     
    </div>
  );
}
