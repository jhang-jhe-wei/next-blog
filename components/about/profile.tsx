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
    <div className="flex mt-36">
      <Image
        priority
        className="align-middle"
        src={profileImg}
        height={332}
        width={326}
      />
      <div className="flex flex-col justify-between ml-20 text-primary font-notosans">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-bold">張哲瑋</h2>
            <SocialMediaList/>
          </div>
          <ul className="mt-10 list-disc list-inside">
            <li>暱稱：Wells</li>
            <li>工作地點：台灣台北</li>
          </ul>
          <p className="mt-10">我是wells，擔任過室內配線的國手，征服了電氣領域後，現在正跨大版圖到資訊界。</p>
        </div>
          <ul className="flex">
            {Object.keys(highlights).map(key => (
              <li key={key} className="mr-16 text-6xl font-bold text-secondary">
                {highlights[key]}
                <h3 className="text-xs text-center text-primary">{key}</h3>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}
