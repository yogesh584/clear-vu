import React, { useState, useRef, useEffect } from "react";

import useRequest from "../../hooks/useRequest";
import {StopwatchIcon} from "../../util/Svg"
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const defaultTimerValue = "00:00:30";
const ResendTimer = () => {
    const { request, response } = useRequest();
    const { email } = useSelector((state) => state.auth);

    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer(defaultTimerValue);
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        request("post", "api/otp/resend", {"emailId":email})
        clearTimer(getDeadTime());
    };

    useEffect(()=>{
        if(response){
          toast.success("OTP sent successfully.")
        }
    },[response])

    return (
        <div className=" my-4">
            Didn’t receive email?{" "}
            <button
                className="font-size-h6 font-weight-bolder text-hover-primary border-0 bg-transparent"
                onClick={onClickReset}
                type="button"
                style={{ color: '#39d9a7', textDecoration: "underline", border: "none" }}
                disabled={timer != "00:00:00"}
            >
                Resend
            </button>
            <span className="time-right" style={{ display: timer == "00:00:00" && "none" }}>
                <StopwatchIcon /> {timer}
            </span>
        </div>
    )
}

export default ResendTimer