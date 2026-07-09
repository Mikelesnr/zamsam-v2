import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { RouteName } from 'ziggy-js';
import { route } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// declare global type once
declare global {
  // eslint-disable-next-line no-var
  var route: typeof route;
}

createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
      resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob('./Pages/**/*.tsx'),
      ),
    setup: ({ App, props }) => {
      // assign implementation
      globalThis.route = ((
        name?: RouteName,
        params?: Record<string, any>,
        absolute?: boolean,
      ) =>
        route(name as any, params as any, absolute, {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location),
        })) as typeof route;

      return <App {...props} />;
    },
  }),
);
