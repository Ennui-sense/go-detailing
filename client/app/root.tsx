import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/main.scss";
import Loader from "./components/Loader/Loader";

// export const links: Route.LinksFunction = () => [
//   { rel: "stylesheet", href: stylesheet },
// ];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" sizes="48x48" />
        <Meta />
        <Links />
      </head>
      <body id="root">
        <div id="boot-loader">
          <Loader variant="boot" />
        </div>

        {children}

        <ScrollRestoration />
        <Scripts />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", function () {
                var loader = document.getElementById("boot-loader");
                if (!loader) return;
                loader.classList.add("boot-loader-hidden");
                setTimeout(function () {
                  loader.remove();
                }, 300);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

export default function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Outlet />
      {isLoading && <Loader variant="overlay" />}
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
