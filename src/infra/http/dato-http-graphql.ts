import type { HTTPGraphql, HTTPGraphqlProps, HTTPGraphqlResponse } from "@/data/protocols/http/http-graphql";

export const DatoHTTPGraphql: HTTPGraphql = async <T, R>({ query, variables, includeDrafts }: HTTPGraphqlProps<T>): Promise<HTTPGraphqlResponse<R>> => {
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

    return { ...responseBody }
}
