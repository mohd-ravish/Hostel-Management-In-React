import QRCode from '../Images/paymentQR.png'

function Payment() {
    return (
        <payment>
            <div class="payment-container">
                <form>
                    <div>
                        <div>
                            <h3 class="title">Billing Address</h3>
                            <div class="inputBox">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your Name" required />
                            </div>
                            <div class="inputBox">
                                <label>Email</label>
                                <input type="email" placeholder="example@example.com" required />
                            </div>
                            <div class="inputBox">
                                <label>Amount</label>
                                <input type="text" placeholder="In Rupees" required />
                            </div>
                            <div class="inputBox">
                                <label>Branch</label>
                                <input type="text" placeholder="Branch" required />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Proceed to checkout" class="submit-btn" />
                </form>
                <div className='qr-img'>
                    <h3 class="title">Payment</h3>
                    <p className='img-label'>Scan this QR Code to make payment</p>
                    <img src={QRCode} alt=""></img>
                </div>
            </div>
        </payment>
    )
}

export default Payment