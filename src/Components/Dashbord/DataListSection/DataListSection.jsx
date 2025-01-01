import ARModelList from "../Lists/ARModelList"
import Disputes from "../Disputes"
import LatestOrder from "../LatestOrder"
import OrderList from "../Lists/OrderList"
import QRList from "../Lists/QRList"
import SettingsPage from "../SettingsPage"
import UsersList from "../Lists/UsersList"


function DataListSection({selectedOption,admin}) {
  return (
    <div className="bg-base-100 mt-5 rounded-lg shadow-lg py-2 px-5">
    {selectedOption === "Dashboard" ? (
      <LatestOrder />
    ) : selectedOption === "Orders" ? (
      <OrderList admin={admin} />
    ) : selectedOption === "QR Codes" ? (
      <>
        <QRList />
      </>
    ) : selectedOption === "AR/VR Models" ? (
      <ARModelList />
    ) : selectedOption === "Settings" ? (
      <SettingsPage />
    ) : admin && selectedOption === "Users" ? (
      <UsersList />
    ) : (
      selectedOption === "Disputes" && <Disputes admin={admin} />
    )}
  </div>
  )
}

export default DataListSection