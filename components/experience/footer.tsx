import SocialMediaList from "./social_media_list"
export default function Footer():React.ReactElement {
  return (
    <footer className="flex justify-around bg-primary">
      <p className="text-2xl py-11 text-light text-nobile">jhang0912407249@gmail.com</p>
      <SocialMediaList/>
    </footer>
  )
}
