import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Layout} from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Home">
      <p>Hello this is the Home page</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
