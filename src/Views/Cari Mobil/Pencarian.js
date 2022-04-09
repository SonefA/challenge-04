// import React from 'react'
// import './Pencarian.css'

// export const Pencarian = () => {
//   return (
//     <div className='container-pencarian'>
//         <div className='main'>
//             <div className='main-left'>
//                 <h1>Sewa & Rental Mobil Terbaik di <br/> kawasan (Lokasimu) </h1>
//                 <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>

//                 <div className='main-mid'>
//                     <div className='tipe-driver'>
//                         <p>Tipe Driver</p>
//                     </div>
//                     <div className='tanggal'>
//                         <p>Tanggal</p>
//                     </div>
//                     <div className='waktu-jemput'>
//                         <p>Waktu Jemput/Ambil</p>
//                     </div>
//                     <div className='jml-penumpang'>
//                         <p>Jumlah Penumpang (optional)</p>
//                     </div>
//                 </div>

//             </div>

//             <div className='main-right'>

//             </div>

//         </div>

//     </div>
//   )
// }

import React, { useState } from "react";
import "./Pencarian.css";

import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";

export const Pencarian = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container-pencarian">
      <div className="main">
        <div className="main-left">
          <h1>
            Sewa & Rental Mobil Terbaik di <br /> kawasan (Lokasimu){" "}
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas{" "}
            <br /> terbaik dengan harga terjangkau. Selalu siap melayani
            kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
          </p>

          <div className="main-mid">
            <div className="tipe-driver">
              <p>Tipe Driver</p>
              <select>
                <option value={"driver1"}>Dengan Sopir</option>
                <option value={"driver2"}>Tanpa Sopir (LepasKunci)</option>
              </select>
            </div>
            <div className="tanggal">
              <p>Tanggal</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="waktu-jemput">
              <p>Waktu Jemput/Ambil</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
            <div className="jml-penumpang">
              <p>Jumlah Penumpang (optional)</p>
              <input type="number"></input>
            </div>
            <Button className="pencarian-btn-cariMobil" variant="success">Cari Mobil</Button>{' '}
          </div>
        </div>

        <div className="main-right"></div>
      </div>
    </div>
  );
};
