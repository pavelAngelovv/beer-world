import Head from 'next/head';


export const getStaticProps = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers')
    const data = await res.json()

    return {
      props: {beers: data}
    }
}

export default function Home({ beers }) {
  return (
    <div>
      <h1>All beers</h1>
    </div>
      
  )
}