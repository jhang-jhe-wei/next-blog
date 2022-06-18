import SocialMediaList from "../social_media_list/social_media_list"
import profileImg from '../../public/images/profile.png'

export default function profoilo():React.ReactElement {
  const highlights = {
    "獲得獎牌數": 12,
    "完成專案數": 30,
    "合作客戶數": 5
  }
  return (
    <div id="profile" className="mt-12 grid grid-cols-1 md:grid-cols-3 md:mt-36 print:grid-cols-4 print:gap-x-5 md:gap-x-12 print:md:grid-cols-4 print:mt-14 print:md:mt-14">
      <div className="w-full mb-7 md:mb-0 print:mb-0">
        <img
          src={profileImg.src}
          height={332}
          width={326}
        />
      </div>
      <div className="relative col-span-2 text-primary dark:text-light font-notosans print:col-span-3">
        <div className="print:h-full print:flex print:justify-between print:flex-col">
          <h2 className="text-5xl font-bold tracking-wider print:text-base">張哲瑋</h2>
          <ul className="mt-10 list-disc list-inside print:text-xs print:mt-0">
            <li>暱稱：Wells</li>
            <li>工作地點：台灣台北</li>
            <li className="hidden print:list-item">我是 Wells，擔任過室內配線的國手，征服了電氣領域後，現在正跨大版圖到資訊界。</li>
          </ul>
          <p className="mt-10 print:hidden">我是 Wells，擔任過室內配線的國手，征服了電氣領域後，現在正跨大版圖到資訊界。</p>
        </div>
        <ul className="flex justify-between max-w-xs mt-10 print:hidden">
          {Object.keys(highlights).map(key => (
            <li key={key} className="text-6xl font-black text-center text-secondary">
              {highlights[key]}
              <h3 className="mt-1 text-sm text-center dark:text-light text-primary">{key}</h3>
            </li>
          ))}
        </ul>
        <div className="mt-12 xl:mt-0 xl:absolute xl:top-3 xl:right-0 print:hidden">
          <SocialMediaList/>
        </div>
      </div>
    </div>
  )
}
