import Auth from "./Auth"

const Dashboard = ({code}) => {

  //saving accessToken so that it can be used in future calls
  const accessToken = Auth(code)

  return (
    <div>{accessToken}</div>
  )
}

export default Dashboard