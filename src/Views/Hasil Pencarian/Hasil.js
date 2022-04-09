import React from "react";
import './Hasil.css'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import carImage from '../../Asset/Img/Main/image 1.svg'
import userLogo from "../../Asset/Img/Main/fi_users.svg"
import settingLogo from "../../Asset/Img/Main/fi_settings.svg"
import calendarLogo from "../../Asset/Img/Main/fi_calendar.svg"

export const Hasil = () => {
  return (
    <div className="container-hasil">

      <div className="card-mobil" id="1">
        <Card style={{ width: "303px" }}>
          <Card.Img className="hasil-img-car" variant="top" src={carImage} />
          <Card.Body>
            <Card.Title><h6>Nama/Tipe Mobil</h6></Card.Title>
            <Card.Text>
              <h5>Rp 430.000 / hari</h5>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
              <ul>
                <li><img className="userLogo" src={userLogo} alt="#"></img>&emsp;4 orang</li>
                <li><img className="settingLogo" src={settingLogo} alt="#"></img>&emsp;Manual</li>
                <li><img className="calendarLogo" src={calendarLogo} alt="#"></img>&emsp;Tahun 2020</li>
              </ul>
            </Card.Text>
            <Button className="hasil-btn-pilihMobil" variant="success">Pilih Mobil</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card-mobil" id="2">
        <Card style={{ width: "303px" }}>
          <Card.Img className="hasil-img-car" variant="top" src={carImage} />
          <Card.Body>
            <Card.Title><h6>Nama/Tipe Mobil</h6></Card.Title>
            <Card.Text>
              <h5>Rp 430.000 / hari</h5>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
              <ul>
                <li><img className="userLogo" src={userLogo} alt="#"></img>&emsp;4 orang</li>
                <li><img className="settingLogo" src={settingLogo} alt="#"></img>&emsp;Manual</li>
                <li><img className="calendarLogo" src={calendarLogo} alt="#"></img>&emsp;Tahun 2020</li>
              </ul>
            </Card.Text>
            <Button className="hasil-btn-pilihMobil" variant="success">Pilih Mobil</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="card-mobil" id="3">
        <Card style={{ width: "303px" }}>
          <Card.Img className="hasil-img-car" variant="top" src={carImage} />
          <Card.Body>
            <Card.Title><h6>Nama/Tipe Mobil</h6></Card.Title>
            <Card.Text>
              <h5>Rp 430.000 / hari</h5>
              <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. </p>
              <ul>
                <li><img className="userLogo" src={userLogo} alt="#"></img>&emsp;4 orang</li>
                <li><img className="settingLogo" src={settingLogo} alt="#"></img>&emsp;Manual</li>
                <li><img className="calendarLogo" src={calendarLogo} alt="#"></img>&emsp;Tahun 2020</li>
              </ul>
            </Card.Text>
            <Button className="hasil-btn-pilihMobil" variant="success">Pilih Mobil</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

    
  );
};
