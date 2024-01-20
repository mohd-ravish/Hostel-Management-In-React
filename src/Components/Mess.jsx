import Header from "./Header";
import Footer from "./Footer";



function Mess() {
    return (
        <div>
            <Header />
            <div class="fee feeSchedule">
                <h1>Minimum Expected Menu</h1>
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <td></td>
                        <td>Saturday</td>
                    </thead>
                    <tbody>
                        <tr class="table">
                            <td>Breakfast</td>
                            <td>Brown Bread(3)<br></br>Amul Butter(1/6) of 100gm /Tops Fruit Jam / Boiled Egg<br></br>Tea</td>
                        </tr>
                        <tr class="table-active">
                            <td>Lunch</td>
                            <td>Aalu Palak / Seasonal Veg<br></br>Rice<br></br>Daal<br></br>Roti<br></br>Salad(Onion/Gajar/Muli/Kheera)</td>
                        </tr>
                        <tr class="table">
                            <td>Dinner</td>
                            <td>Chicken Biriany<br></br>Raita(Boondi)<br></br>Mutter Paneer<br></br>Pulao<br></br>Raita(Boondi)</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <td></td>
                        <td>Sunday</td>
                    </thead>
                    <tbody>
                        <tr class="table">
                            <td>Breakfast</td>
                            <td>Anda Paratha(2), Chatni, Tea, Aalu Paratha(2), Chatni, Tea</td>
                        </tr>
                        <tr class="table-active">
                            <td>Lunch</td>
                            <td>Mutter Paneer, Rice, Daal, Roti, Salad(Onion/Gajar/Muli/Kheera)</td>
                        </tr>
                        <tr class="table">
                            <td>Dinner</td>
                            <td>Chicken Biriany, Raita (Boondi), Mutter Paneer, Pulao, Raita (Boondi)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    );
}

export default Mess;