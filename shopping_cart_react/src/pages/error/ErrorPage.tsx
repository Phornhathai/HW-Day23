import { useRouteError } from 'react-router-dom'
import "./errorpage.scss"

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError()
  return (
    <div className="errorpage">
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-400'>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  )
}

export default ErrorPage