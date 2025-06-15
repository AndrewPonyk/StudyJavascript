import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
          <h1 className="text-4xl font-bold mb-4" style={{color: "red"}}>Welcome to Next.js! - Hello Project</h1>
            <Link href="/api/hello">
              Test API Route
            </Link>

            <div id="next-js-project-desc" className="prose max-w-none bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">How Next.js Routing Works</h2>
              
              <p className="mb-4">
                That's an excellent question, and it gets to the heart of how Next.js works! The configuration that makes the 
                <code className="bg-gray-100 px-1.5 py-0.5 rounded">Home()</code> function in 
                <code className="bg-gray-100 px-1.5 py-0.5 rounded">src/app/page.tsx</code> run on the root URL (/) is not in a traditional config file. 
                Instead, Next.js uses a file-system based routing system.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">App Router Basics</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>The <code>app</code> Directory:</strong> Next.js automatically treats the <code>src/app</code> directory as the root for all your application's routes.
                </li>
                <li>
                  <strong>Special <code>page.tsx</code> Files:</strong> Within any folder inside the app directory, a file named <code>page.js</code> or <code>page.tsx</code> automatically becomes the public-facing page for that route.
                </li>
                <li>
                  <strong>Root URL Mapping:</strong> When you place a <code>page.tsx</code> file directly inside the app directory (like <code>src/app/page.tsx</code>), Next.js maps it to the root URL (<code>/</code>).
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="font-medium text-blue-700">Key Rule:</p>
                <code className="block bg-white p-2 rounded mt-2">src/app/page.tsx = /</code>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Examples in Your Project</h3>
              <div className="grid gap-2">
                <div className="flex items-baseline">
                  <code className="bg-gray-100 p-1 rounded font-mono text-sm">src/app/posts/page.tsx</code>
                  <span className="mx-2 text-gray-500">→</span>
                  <span>Creates the page for the <code>/posts</code> route</span>
                </div>
                <div className="flex items-baseline">
                  <code className="bg-gray-100 p-1 rounded font-mono text-sm">src/app/api/hello/route.ts</code>
                  <span className="mx-2 text-gray-500">→</span>
                  <span>Creates the API endpoint at <code>/api/hello</code></span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-green-800">
                  This convention-over-configuration approach is a core feature of Next.js. It simplifies routing by making the file structure of your project define the URL structure of your application, without needing a separate routing configuration file.
                </p>
              </div>
            </div>
            <table className="w-full sm:w-[500px]">
          <thead>
            <tr>
              <th className="text-left border p-2">Route</th>
              <th className="text-left border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <Link href="/api/hello" className="text-blue-600 hover:underline">
                  /api/hello
                </Link>
              </td>
              <td className="border p-2">Test API Route</td>
            </tr>
            <tr>
              <td className="border p-2">
                <Link href="/posts" className="text-blue-600 hover:underline">
                  /posts
                </Link>
              </td>
              <td className="border p-2">Get all posts</td>
            </tr>
            <tr>
              <td className="border p-2">
                <Link href="/posts/1" className="text-blue-600 hover:underline">
                  /posts/1
                </Link>
              </td>
              <td className="border p-2">Get post with id = 1</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
