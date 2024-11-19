import { getAnimals } from '../getAnimals'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    console.log(request)
    try {
        const response = await getAnimals()

        if (response?.error) {
            return new Response(
                JSON.stringify({ error: true, message: 'Failed to get Animal Request' }),
                { status: 500 }
            )
        }

        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: true,
                message: error instanceof Error ? error.message : 'Unknown error'
            }),
            { status: 500 }
        )
    }
}