import Header from "./Header";
import Footer from "./Footer";

function About() {
    return (
        <div>
            <Header />
            <div class="fee feeSchedule">
                <div class="fee">
                    <h1>HOSTEL FEE STRUCTURE</h1>
                    <h2>Hostel Charges</h2>
                    <table class="table table-bordered">
                        <thead class="table-dark">
                            <td>Heads of fee</td>
                            <td>New Allotment</td>
                            <td>Renewal</td>
                        </thead>
                        <tbody>
                            <tr class="table">
                                <td>Admission Fee</td>
                                <td>300</td>
                                <td>NIL</td>
                            </tr>
                            <tr class="table-active">
                                <td>Hostel Maintenance Fee</td>
                                <td>3000</td>
                                <td>3000</td>
                            </tr>
                            <tr class="table">
                                <td>Hostel Services</td>
                                <td>4000</td>
                                <td>4000</td>
                            </tr>
                            <tr class="table-active">
                                <td>Commom Room</td>
                                <td>500</td>
                                <td>500</td>
                            </tr>
                            <tr class="table">
                                <td>Development</td>
                                <td>500</td>
                                <td>500</td>
                            </tr>
                            <tr class="table-active">
                                <td>Kitchen Maintenance</td>
                                <td>1000</td>
                                <td>1000</td>
                            </tr>
                            <tr class="table">
                                <td>Hostel Function/Sports/Magzine/Student Welfare Fund</td>
                                <td>500</td>
                                <td>500</td>
                            </tr>
                            <tr class="table-active">
                                <td>Hostel Identity Card</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr class="table">
                                <td>Room Rent</td>
                                <td>1000</td>
                                <td>1000</td>
                            </tr>
                            <tr class="table-active">
                                <td>Electricity /Water</td>
                                <td>2000</td>
                                <td>2000</td>
                            </tr>
                            <tr class="table">
                                <td>Caution Money (Refundable)</td>
                                <td>500</td>
                                <td>NIL</td>
                            </tr>
                            <tr class="table-active">
                                <td>Mess Caution Money (Refundable)</td>
                                <td>2000</td>
                                <td>NIL</td>
                            </tr>
                            <thead class="table">
                                <th>Total</th>
                                <th>15350</th>
                                <th>12550</th>
                            </thead>
                            <tr>
                                <td colspan="3">*Physicaly challanged students whose parent's annual income is not above Rs.150 lakhs per
                                    annum are exempted from the payment of room rent (Supporting document required as per jamia norms)
                                    <br></br>
                                    *NRI students will pay 1000 $(USD) as Annual Hostel Charges
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mess">
                    <h2>Mess Charges</h2>
                    <table class="table table-bordered">
                        <thead class="table-dark">
                            <td>Category</td>
                            <td>Charges/Month</td>
                            <td>Charges for 10 months</td>
                            <td>Items Served</td>
                        </thead>
                        <tbody>
                            <tr class="table">
                                <td>General</td>
                                <td>2600</td>
                                <td>26000</td>
                                <td>As per Mess Menu</td>
                            </tr>
                            <tr>
                                <td colspan="4">*Some add-on items will be available on thecounter by cash payment</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <section class="schedule">
                    <h2>Fee Payment Schedule</h2>
                    <h4>(a) Mess Fee</h4>
                    <ul>
                        <li>All students must pay the prescribed Mess Fee, which may be revised from time to time.</li>

                        <li>Mess will generally function from 1st of July to 20th December and 1st of January to 15th May every year.
                        </li>

                        <li>Mess fee will be charged in TWO INSTALLMENTS. The first instalment will be deposited at the time of
                            renewal/new admission and the second instalment will be due on 1st January/prior to the functioning of Mess.
                        </li>

                        <li>Every resident has to deposit a sum of Rs.2000/- towards Mess Caution Money (refundable) at the time of
                            admission.</li>

                        <li>On prior information, the Warden (Mess) may allow the adjustment of mess remission at the end of the
                            session.
                            However, no mess refund shall be allowed for less than 5 consecutive days and for not more than 30 days in one
                            academic year. No claim for remission of food charges shall be entertained if the resident has not submitted
                            prior application to the concerned Warden/Caretaker.</li>

                        <li>If the resident fails to deposit the Mess Fee on due date, a late payment fine of Rs.200/- shall be charged
                            up
                            to 15 days. Thereafter, the mess facility shall be withdrawn and an appropriate action shall be taken against
                            such defaulter including expulsion from the hostel.
                        </li>
                        <li>Any resident, who is exempted from the hostel mess by Sr. Warden (Mess) under special circumstances/Medical
                            ground, shall have to pay a token fee of Rs.500/- per month for 06 months as Mess Exemption Fee on Medical.
                        </li>
                    </ul>
                    <h4>(b) Mess Fee</h4>
                    <ul>
                        <li>
                            Hostel Fee shall be submitted in ONE INSTALLMENT at the time of Hostel
                            Allotment/Renewal.
                        </li>
                    </ul>
                    <h2 class="payment">Mode of Payment and cancellation</h2>
                    <ul>
                        <li>
                            No part payment is allowed.
                        </li>
                        <li>
                            Residents are required to make payments during the prescribed period, failing which a
                            fine of Rs.200/- will be charged up to 15 days after the expiry of the last date.
                        </li>
                        <li>
                            If a resident fails to pay before the end of the prescribed date mentioned for the instalments, his admission
                            to
                            the hostel stands cancelled. He may, however, be re- admitted with the permission of the Provost on payment of
                            re-admission charges of Rs.1000/- provided vacant seat in the hostel is available.
                        </li>
                        <li>
                            Hostel and Mess Caution Money will be refunded to the resident at the time of leaving
                            the hostel and within the same financial year before 31st March.
                        </li>
                        <li>
                            The claim of the student for reimbursement of caution money shall stand forfeited or deemed to have been
                            relinquished, it it is not claimed within one year from the date of leaving the hostel within the same
                            financial
                            year before 31st March.
                        </li>
                        <li>
                            In case of withdrawal of admission from the hostel within a week, all the fees except the admission fees shall
                            be refunded.
                        </li>
                        <li>
                            On withdrawal beyond one week, no fees will be refunded except the Caution Money on the production of the
                            clearance certificate.
                        </li>
                    </ul>
                    <h5>
                        NOTE: The final authority in all hostel matters rests with the Provost.
                    </h5>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default About;