import axios from "axios";
import { server } from "../../server";

// create luckydraw
export const createLuckydraw = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "luckydrawCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/luckydraw/create-luckydraw`,
      newForm,
      config
    );

    dispatch({
      type: "luckydrawCreateSuccess",
      payload: data.luckydraw,
    });
  } catch (error) {
    dispatch({
      type: "luckydrawCreateFail",
      payload: error.response.data.message,
    });
  }
};


export const getAllLuckydrawsShop = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "getAllLuckydrawRequest",
      });
  
      const { data } = await axios.get(
        `${server}/luckydraw/get-all-luckydraws/${id}`
      );
  
      dispatch({
        type: "getAllLuckydrawRequestSuccess",
        payload: data.luckydraws,
      });
    } catch (error) {
      dispatch({
        type: "getAllLuckydrawRequestFail",
        payload: error.response.data.message,
      });
    }
  };

  //delete bidding of a shop
export const deleteLuckydraw = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "deleteluckydrawRequest",
      });
  
      const { data } = await axios.delete(
        `${server}/luckydraw/delete-shop-luckydraw/${id}`,
        { withCredentials: true }
      );
  
      dispatch({
        type: "deleteluckydrawRequestSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "deleteluckydrawRequestFail",
        payload: error.response.data.message,
      });
    }
  };
  
  
// get all products
export const getAllLuckydraws = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllLuckydrawsRequest",
    });

    const { data } = await axios.get(`${server}/luckydraw/get-all-luckydraws`);
    dispatch({
      type: "getAllLuckydrawsRequestSuccess",
      payload: data.luckydraws,
    });
  } catch (error) {
    let errorMessage = "An unexpected error occurred";
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    dispatch({
      type: "getAllLuckydrawsRequestFail",
      payload: errorMessage,
    });
  }
};
