"use client";

import { useEffect, useState } from "react";
import { filterActiveAnimals } from "../util/helpers";
import PropTypes from "prop-types";

export default function AnimalList({ showOnlyActive = false }) {
    const [ animalData, setAnimalData ] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async (url: string): Promise<any> => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                return response.json()
            } catch (err) {
                console.error(err)
            }
        }

        const callAnimalApi = async () => {
            try {
                const data = await fetchData('../api/get-animals')
                if (showOnlyActive) {
                    const filteredAnimals = filterActiveAnimals(data)
                    setAnimalData(filteredAnimals)
                } else {
                    setAnimalData(data)
                }
            } catch (err) {
                console.error('Error - unable to load data')
            }
        }

        callAnimalApi()
    }, [])

    return (
        <div className={`flex flex-col gap-4 m-2`}>
            <ul className={`flex flex-col gap-2`}>
                {animalData && animalData.map((animal) => (
                    <li key={animal?.id} className={`flex justify-between w-full text-white p-4 rounded-lg drop-shadow`} style={{backgroundColor: animal.color}}>
                        <h2 className={'text-l drop-shadow'}>{animal?.name}</h2>
                        {/* <span className={'text-l ml-auto'}>Active: {animal?.is_active ? 'Yes' : 'No'}</span> */}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

AnimalList.propTypes = {
    showOnlyActive: PropTypes.bool
}