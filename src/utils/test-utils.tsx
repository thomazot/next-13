import { ReactElement } from "react"
import { RenderOptions, render } from "@testing-library/react"

type ProviderProps = {
    children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => (<>{children}</>)

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: Provider, ...options })

export * from "@testing-library/react"
export { customRender as render }