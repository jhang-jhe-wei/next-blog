import Image from "next/image"
import SocialMediaList from "../social_media_list/social_media_list"
import profileImg from '../../public/images/profile.png'

export default function profoilo():React.ReactElement {
  const highlights = {
    "獲得獎牌數": 20,
    "完成專案數": 99,
    "合作客戶數": 10
  }
  return (
    <div id="profile" className="mt-12 grid grid-cols-3 md:mt-36">
      <div className="w-full">
        <Image
          priority
          layout="responsive"
          src={profileImg}
          height={332}
          width={326}
        />
      </div>
      <div className="relative ml-12 col-span-2 text-primary dark:text-light font-notosans">
        <div>
          <h2 className="text-5xl font-bold tracking-wider">張哲瑋</h2>
          <ul className="mt-10 list-disc list-inside">
            <li>暱稱：Wells</li>
            <li>工作地點：台灣台北</li>
          </ul>
          <p className="mt-10">我是 Wells，擔任過室內配線的國手，征服了電氣領域後，現在正跨大版圖到資訊界。</p>
        </div>
        <ul className="flex justify-between max-w-xs mt-10">
          {Object.keys(highlights).map(key => (
            <li key={key} className="text-6xl font-black text-secondary">
              {highlights[key]}
              <h3 className="mt-1 text-sm text-center dark:text-light text-primary">{key}</h3>
            </li>
          ))}
        </ul>
        <div className="mt-12 xl:absolute xl:top-3 xl:right-0">
          <SocialMediaList/>
        </div>
      </div>
    </div>
  )
}
