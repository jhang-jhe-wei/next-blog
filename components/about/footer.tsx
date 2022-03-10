import SocialMediaList from "../social_media_list/social_media_list"
export default function Footer():React.ReactElement {
  return (
    <footer className="bg-primary dark:bg-light">
      <div className="flex justify-between max-w-sm mx-auto md:max-w-5xl">
        <p className="text-2xl py-11 text-light dark:text-primary text-nobile">jhang0912407249@gmail.com</p>
        <SocialMediaList mode="dark"/>
      </div>
    </footer>
  )
}
