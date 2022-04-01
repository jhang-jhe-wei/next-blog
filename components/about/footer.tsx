import SocialMediaList from "../social_media_list/social_media_list"
export default function Footer():React.ReactElement {
  return (
    <footer className="bg-primary dark:bg-light">
      <div className="flex flex-wrap justify-between px-10">
        <p className="text-xl py-9 text-light dark:text-primary text-nobile">jhang0912407249@gmail.com</p>
        <SocialMediaList mode="dark"/>
      </div>
    </footer>
  )
}
