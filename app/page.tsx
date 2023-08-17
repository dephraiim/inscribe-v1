import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-6xl my-4 font-bold text-center">
            {session ? "Signed In" : "Not Signed In"}
          </h1>
          <div>
            <pre>
              <code>{JSON.stringify(session, null, 2)}</code>
            </pre>
          </div>
        </div>

        {!session && (
          <div>
            <a className="my-4 text-xl font-medium" href="/api/auth/signin">
              Sign in
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
