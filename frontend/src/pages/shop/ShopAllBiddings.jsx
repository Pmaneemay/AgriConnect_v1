import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllBiddings from "../../components/Shop/AllBiddings.jsx"

const ShopAllBiddings = () => {
    return (
        <div>
            <DashboardHeader/>
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                  <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex mt-10">
                   <AllBiddings />
                </div>
              </div>
        </div>
      )
}

export default ShopAllBiddings