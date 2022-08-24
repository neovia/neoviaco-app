import Head from "next/head"

interface LayoutProps {
    children: React.ReactNode;
}


const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Neovia</title>
                <meta name="description" content="Agence Web Drupal et React" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
            </Head>
            {children}
        </>

    )
}

export default Layout;
