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
import Link from "./components/Link/Link";
import Page from "./layouts/Page";

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
  let statusLabel = "Error";
  let title = "Что-то пошло не так";
  let description = "Произошла ошибка, но мы уже работаем над её устранением.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      statusLabel = "404";
      title = "Эта страница уехала на детейлинг";
      description = `Мы проверили все маршруты, но ссылка всё ещё вне зоны видимости.\nЗато ваш автомобиль мы найдём и приведём в порядок за 3 часа.`;
    } else {
      statusLabel = String(error.status);
      title = "Неизвестная ошибка";
      description = error.statusText || description;
    }
  } else if (error instanceof Error) {
    if (import.meta.env.DEV) {
      description = error.message || description;
      stack = error.stack;
    }
  }

  return (
    <Page>
      <main className="error-page">
        <div className="error-page__inner container">
          <p className="error-page__status">{statusLabel}</p>
          <div className="error-page__body">
            <h1 className="error-page__title">{title}</h1>
            <p className="error-page__description">{description}</p>

            <div className="error-page__links">
              <Link href="/" className="error-page__link" variant="border">
                На главную
              </Link>
              <Link
                className="error-page__link"
                href="https://n2056470.yclients.com/"
                openInNewWindow
              >
                Записаться на выезд
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}
