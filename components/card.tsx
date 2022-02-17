export default function Card({portfolio}:{portfolio: CardProp}) {
  return(
    <div className="max-w-xs mx-4 mb-12 bg-white font-notosans">
      <img className="" src={portfolio.image} alt="Sunset in the mountains"/>
      <div className="mx-6 mt-5 text-base ">
        <h2 className="font-bold text-secondary">{portfolio.title}</h2>
        <p className="mt-5 text-zinc-700">{portfolio.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 pb-5">
        <a className="px-4 py-2 text-xs text-white border-2 rounded border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={portfolio.demo_link}>Demo</a>
        <a className="px-4 py-2 mx-2 text-xs text-white border-2 rounded border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={portfolio.code_link}>Source Code</a>
      </div>
    </div>
  )
}

interface CardProp {
  title: string;
  image: string;
  description: string;
  demo_link: string;
  code_link: string;
}

