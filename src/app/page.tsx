import { Logo } from "@/components/Logo/Logo";
import { Widget } from "@/components/Widget";
import { DatoHTTPGraphql } from "@/infra/http/dato-http-graphql";

export default async function Home() {
  const { data, errors } = await DatoHTTPGraphql<{}, {}>({
    query: `
      _site {
        globalSeo {
          titleSuffix
          fallbackSeo {
            description
            noIndex
            title 
          }
        }
      }
    `
  })

  console.log({ data, errors })
  return (
    <main className="h-screen bg-black flex items-center justify-center text-zinc-50">
      <Widget />
      <Logo />
    </main>
  )
}
