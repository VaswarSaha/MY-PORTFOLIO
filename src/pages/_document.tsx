import { Html, Head, Main, NextScript } from "next/document";

// Runs before React hydrates, so the correct theme class is on <html>
// before first paint — avoids a light-mode flash for users who've
// chosen (or whose system prefers) dark mode.
const noFlashThemeScript = `
(function () {
  try {
    var saved = window.localStorage.getItem("theme");
    var theme = saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
