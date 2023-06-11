import './QRCard.css';
export default function QRCard() {
    return (
        <div className="qr-card">
            <img src="./qr-code-component/image-qr-code.png" alt="qr code" className="qr-image"/>
            <div className="qr-card-text">
                <h2 className="qr-heading">Improve your front-end skills by building projects</h2>
                <p className="qr-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}