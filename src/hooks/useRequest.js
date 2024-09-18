import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { logout, updateLoading } from "../store/auth/action";
import { BASEURL } from "../constant/api";
import notification from "../util/toastifyNotifications";

const BACKEND_URL = BASEURL.PORT;

const useRequest = () => {
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const { token } = useSelector((state) => state.auth);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoading({ loading }));
  }, [loading,dispatch]);

  const startFetching = () => {
    setResponse(null);
    setLoading(true);
    setError(null);
  };

  const clear = () => {
    setResponse(null);
    setError(null);
  };

  const fetchedData = () => {
    setLoading(false);
    setError(null);
  };

  const requestData = (method, url, data) => {
    let config;

    if (token) {
      config = {
        method,
        url: `${BACKEND_URL}/${url}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data,
      };
    } else {
      config = {
        method,
        url: `${BACKEND_URL}/${url}`,
        data,
      };
    }

    startFetching();

    axios(config)
      .then((res) => {
        fetchedData();
        setResponse(res.data);
      })
      .catch((err) => {
        fetchedData();
        if (err.response) {
          if (err.response.status === 401) {
            dispatch(logout());
          } else if (err.response.status === 404) {
            history.push("/404");
          } else if (err.response.status === 400) {
            notification.error("Bad Request", err.response.data.responseMessage)
          } else {
            toast.error(err.response.data.message);
          }
        } else if (err.request) {
          notification.error("Try Again later.", "Slow Network Speed. Try Again later.")
        } else {
          notification.error("Oops!!.", "Unusual error occurred")
        }
      });
  };

  return {
    loading,
    error,
    request: requestData,
    clear,
    response,
    setError,
  };
};

export default useRequest;
