// Layout.js
import Head from "next/head"
import Link from "next/link"

export default function Layout({children, title = "HP by Nextjs"}) {
    return (
    <div className="flex flex-col min-h-screen text-gray-600 text-sm font-mono">
    <Head>
        <title>{title}</title>
    </Head>
    <header>
        <nav className="bg-gray-800 w-screen">
            <div className="flex items-center pl-8 h-14">
                <div className="flex space-x-4">
                    <Link href="/">
                        <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            ホーム
                        </a>
                    </Link>
                    <Link href="/companies/new">
                        <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                            新規作成
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
    <main className="flex flex-col items-center flex-grow w-screen">
        {children}
    </main>
    </div>
);
}



