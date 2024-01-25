import QRCode from '../Images/paymentQR.png'

function Payment(){
    return(
        <payment>
            <div class="payment-container">
                <form>
                    <div class="row">
                        <div class="col">
                            <h3 class="title">Billing Address</h3>
                            <div class="inputBox">
                                <label>Full Name</label>
                                <input name="p_name" type="text" placeholder="Enter your Name" required />
                            </div>
                            <div class="inputBox">
                                <label>Email</label>
                                <input name="p_email" type="email" placeholder="example@example.com" required />
                            </div>
                            <div class="inputBox">
                                <label>Amount</label>
                                <input name="p_amt" type="text" placeholder="In Rupees" required />
                            </div>
                            <div class="inputBox">
                                <label>Branch</label>
                                <input name="p_branch" type="text" placeholder="Branch" required />
                            </div>
                        </div>
                        <div class="col">
                            <h3 class="title">Payment</h3>
                            <div>
                                <label style="padding-left: 30px; font-size: 13px;">Scan this QR Code to make payment</label>
                                <img src={QRCode} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Proceed to checkout" class="submit-btn" />
                </form>
            </div>
        </payment>

    )
}

export default Payment