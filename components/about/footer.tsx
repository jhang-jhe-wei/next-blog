import SocialMediaList from "../social_media_list/social_media_list"
export default function Footer():React.ReactElement {
  return (
    <footer className="bg-primary dark:bg-light py-9">
      <div className="px-10 md:justify-between md:flex">
        <p className="mb-6 text-xl text-center text-light dark:text-primary text-nobile">jhang0912407249@gmail.com</p>
        <SocialMediaList mode="dark"/>
      </div>
    </footer>
  )
}
