import { Html, Head, Main, NextScript } from 'next/document'
import {useMenuContext} from "@hooks/useMenu";

export default function Document() {
    const { menuIsOpen } = useMenuContext()
  return (
    <Html lang="en">
        <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
