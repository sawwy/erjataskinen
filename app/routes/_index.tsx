import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ];
};

export default function Index() {
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
    </div>
  );
}
