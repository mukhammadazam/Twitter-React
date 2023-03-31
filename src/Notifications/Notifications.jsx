import './Noti.scss';
const Notifications = () => {
  return (
    <>
    <div className="bg">

    </div>
    <br />
    <div className="noti">
      <button className="d-block noti__btnAll">All</button>
      <button className="d-block noti__btnVerified">Verified</button>
      <button className="d-block noti__btnMentions">Mentions</button>
    </div>
    </>
  )
}

export default Notifications