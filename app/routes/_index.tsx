import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { ClientOnly } from '~/client-only';
import { Map } from '~/map.client';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://unpkg.com/leaflet@1.8.0/dist/leaflet.css',
  },
];

export default function Index() {
  const mapHeight = '400px';
  return (
    <div className="grid grid-cols-1 gap-4 p-4 font-sans leading-7">
      <h1 className="text-4xl">Welcome to Remix (with Vite and Cloudflare)</h1>
      <ul>
        <li>
          <a
            className="text-xl text-blue-900 transition-colors hover:text-blue-500"
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare
          </a>
        </li>
        <li>
          <a
            className="text-xl text-blue-900 transition-colors hover:text-blue-500"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <ClientOnly fallback={<div id="skeleton" style={{ height: mapHeight, background: '#d1d1d1' }} />}>
        {() => <Map height={mapHeight} />}
      </ClientOnly>
    </div>
  );
}
