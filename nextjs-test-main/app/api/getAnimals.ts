export const getAnimals = async () => {
    try {
        const response = await fetch(
            'https://673b2e6b339a4ce4451b0018.mockapi.io/apiv1/v1/animals',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        );

        if (!response.ok || response.status !== 200) {
            return {error: true, message: `Failed to get Animals information`};
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        return { error: true, message: `Failed to get Animals information` };
    }
};
