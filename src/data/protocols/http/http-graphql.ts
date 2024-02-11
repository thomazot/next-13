
export type HTTPGraphqlProps<T=any> = {
    query: string,
    variables?: T,
    includeDrafts?: boolean
}

export type HTTPGraphqlErrors = {
    message: string,
    locations: {
        line: number,
        column: number
    }[]
}

export type HTTPGraphqlResponse<R=any> = {
    data?: R
    errors?: HTTPGraphqlErrors
}

export type HTTPGraphql = <T, R>(props: HTTPGraphqlProps<T>) => Promise<HTTPGraphqlResponse<R>>