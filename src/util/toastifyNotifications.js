import { toast } from 'react-toastify';
import { NotificationCloseIcon } from "./Svg"

class Notification {
    info(title, description) {
        toast.info(
            () => (
                <div className="bg-white d-flex" style={{ borderRadius: "20px", gap: "5px" }}>
                    <div>
                        <div><h5 style={{ fontSize: "17px", color: "#289A77" }}>{title}</h5></div>
                        <div><p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>{description}</p></div>
                    </div>
                    <div>
                        <NotificationCloseIcon />
                    </div>
                </div>
            ),
            {
                icon: false,
                closeButton: false,
                style: {
                    padding: "1.5rem",
                    borderRadius: "20px"
                },
                hideProgressBar: true,
            }
        );
    }

    error(title, description) {
        toast.error(
            () => (
                <div className="bg-white d-flex" style={{ borderRadius: "20px", gap: "5px" }}>
                    <div>
                        <div><h5 style={{ fontSize: "17px", color: "#FB6464" }}>{title}</h5></div>
                        {
                            description && <div><p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>{description}</p></div>
                        }
                    </div>
                    <div>
                        <NotificationCloseIcon />
                    </div>
                </div>
            ),
            {
                icon: false,
                closeButton: false,
                style: {
                    padding: "1.5rem",
                    borderRadius: "20px"
                },
                hideProgressBar: true,
            }
        );
    }

    success(title, description) {
        toast.success(
            () => (
                <div className="bg-white d-flex" style={{ borderRadius: "20px", gap: "5px" }}>
                    <div>
                        <div><h5 style={{ fontSize: "17px", color: "#289A77" }}>{title}</h5></div>
                        <div><p style={{ fontWeight: "normal", fontSize: "12px", margin: 0 }}>{description}</p></div>
                    </div>
                    <div>
                        <NotificationCloseIcon />
                    </div>
                </div>
            ),
            {
                icon: false,
                closeButton: false,
                style: {
                    padding: "1.5rem",
                    borderRadius: "20px"
                },
                hideProgressBar: true,
            }
        );
    }
}

const notificationObj = new Notification;
export default notificationObj;