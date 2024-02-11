type RequestProps = {
    query: string
    variables: {}
    includeDrafts: boolean
}

export const request = async ({ query, variables={}, includeDrafts = false }: RequestProps) => {
    const response = await fetch(`${process.env.NEXT_DATOCMS_API}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
            ... (includeDrafts ? { 'X-Include-drafts': "true" } : {})
        },
        method: "POST",
        body: JSON.stringify({ query, variables })
    })

    const responseBody = await response.json()

    if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`)
    }

    return responseBody
}