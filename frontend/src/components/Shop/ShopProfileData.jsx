import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import ProductCard2 from "../Route/ProductCard/ProductCard2";
import { useDispatch, useSelector } from "react-redux";
import { getAllBiddingsShop } from "../../redux/actions/bidding";
import { getAllLuckydrawsShop} from "../../redux/actions/luckydraw";
import ProductCard from "../Route/ProductCard/ProductCard";

const ShopProfileData = ({ isOwner }) => {
  const [active, setActive] = useState(1);
  const { biddings } = useSelector((state) => state.biddings);
  const { luckydraws } = useSelector((state) => state.luckydraws);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBiddingsShop(id));
    dispatch(getAllLuckydrawsShop(id));
  }, [dispatch]);


  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Biddings
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              LuckyDraws
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {biddings &&
            biddings.map((i, index) => (
              <ProductCard data={i} key={index} isShop={true} />
            ))}
        </div>
      )}

      {active === 2 && (
        <div className="w-full">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {luckydraws &&
              luckydraws.map((i, index) => (
                <ProductCard2 data={i} key={index} isShop={true} />
              ))}
          </div>
          {luckydraws && luckydraws.length === 0 && (
            <h5 className="w-full text-center py-5 text-[18px]">
              No LuckyDraws for this shop!
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopProfileData;
