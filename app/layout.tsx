import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="f9k2-html">
      <head>
        <meta name="yandex-verification" content="97727980b4f58a6c" />
        <meta charSet="utf-8" />
        <title>Faro Casino официальный сайт — играть онлайн, зеркало Фаро казино</title>
        <meta
          name="description"
          content="Faro Casino официальный сайт и рабочее зеркало Фаро казино. Быстрый вход, моментальные выплаты, бонусы до 139 500 ₽ и 1 145 FS. Играйте в Faro казино онлайн прямо сейчас!"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://farocasino38.vercel.app/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#121316" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Faro Casino официальный сайт — играть онлайн, зеркало Фаро казино" />
        <meta
          property="og:description"
          content="Faro Casino официальный сайт и рабочее зеркало Фаро казино. Быстрый вход, бонусы до 139 500 ₽ и 1 145 FS. Играйте в Faro казино онлайн!"
        />
        <meta property="og:url" content="https://farocasino38.vercel.app/" />
        <meta property="og:site_name" content="Faro Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino официальный сайт — играть онлайн, зеркало Фаро казино" />
        <meta
          name="twitter:description"
          content="Faro Casino официальный сайт и рабочее зеркало Фаро казино. Бонусы до 139 500 ₽ и 1 145 FS."
        />
      </head>
      <body className="f9k2-body antialiased">
        {children}
      </body>
    </html>
  )
}
