import { buttonVariants } from "@/components/ui/button"
import { MessageState } from "@/components/dashboard/message-state"
import { TitleBar } from "@/components/dashboard/title-bar"

const DashboardIndexPage = () => {
  const titleBar = "Dashboard Title" // Replace with your static title
  const titleBarDescription = "This is the description of the title bar." // Replace with your static description
  const messageStateTitle = "Message State Title" // Replace with your static message state title
  const messageStateDescription = "This is the description of the message state." // Replace with your static message state description
  const messageStateButton = "Learn More" // Replace with your static button text

  return (
    <>
      <TitleBar title={titleBar} description={titleBarDescription} />

      <MessageState
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M0 0h24v24H0z' stroke='none' />
            <path d='M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5' />
          </svg>
        }
        title={messageStateTitle}
        description={
          <span>
            This is the description of the message state with a code snippet:{" "}
            <code className='bg-secondary text-secondary-foreground'>your-code-snippet</code>.
          </span>
        }
        button={
          <a className={buttonVariants({ size: "lg" })} href='https://nextjs-boilerplate.com/pro-saas-starter-kit'>
            {messageStateButton}
          </a>
        }
      />
    </>
  )
}

export default DashboardIndexPage
