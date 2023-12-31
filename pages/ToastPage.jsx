import React from 'react'
import Toast from '../components/Toast/Toast';

export default function ToastPage() {
    const [toast, setToast] = React.useState(false);
    const [toastInfo, setToastInfo] = React.useState({variant: "success", text: "Some text here"});

    function toggleToast(variant) {
        if (!toast) {
            let text;
            switch (variant){
                case "success":
                    text = "Your work has been saved.";
                    break;
                case "warning":
                    text = "A network error was detected.";
                    break;
                case "information":
                    text = "Please read the updated information.";
                    break;
                case "error":
                    text = "Please re-save your work again.";
                    break;
            }
    
            setToast(true);
            setToastInfo({variant, text});
            setTimeout(() => {
                setToast(false);
            }, 5000);
        }
    }

    return (
        <div className="page">
            <h1 className="page-header">Toasts</h1>
            <p>Click a button below to display a toast popup.</p>
            <div className="toast-button-row">
                <button className="toast-button" onClick={() => toggleToast("success")}>Success</button>
                <button className="toast-button" onClick={() => toggleToast("warning")}>Warning</button>
                <button className="toast-button" onClick={() => toggleToast("information")}>Info</button>
                <button className="toast-button" onClick={() => toggleToast("error")}>Error</button>
            </div>
            <Toast visible={toast} variant={toastInfo.variant}>{toastInfo.text}</Toast>
        </div>
    );
}