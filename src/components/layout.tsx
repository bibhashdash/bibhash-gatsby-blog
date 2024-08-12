import * as React from "react"
import {Link} from "gatsby";

export const Layout = ({title, children}: {title: string, children: React.ReactNode}) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <h1>{title}</h1>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}