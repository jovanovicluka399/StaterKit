import Layout from "@common/Layout";
import React, { ReactElement, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import QRCode from "qrcode.react";
import rat from "@assets/images/rat.png";
import { Link } from "react-router-dom";

const MyQRCode = ({}) => {
  const [showTip, setShowTip] = useState(true);
  const [url, setUrl] = useState(String);
  // useEffect(() => {
  //   setUrl("HiroRat.com/" + roomCode);
  // }, [roomCode]);
  const qrCodeImage = {
    src: { rat },
    height: 80,
    width: 80,
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="qrcode-page d-flex justify-content-center">
          <Container>
            <br />
            <h2 className="text-center">Custom QR Code</h2>
            <br />
            {showTip ? (
              <div className="alert alert-info d-flex justify-content-between">
                <div>
                  <span>
                    As an alternative to your unique link. You may also
                    distribute your unique QR code.
                    <br />
                    Players can get to your trivia room by simply taking a
                    picture of it with their smart phone (most modern phones
                    support this method).
                    <br />
                    <br />
                    NOTE: Your unique QR code is linked to your HiroRat.com
                    unique URL, so if you change your room code, you will need
                    to use the new QR code found here.
                    <br />
                    <br />
                    <a
                      rel="noopener noreferrer"
                      href="https://en.wikipedia.org/wiki/QR_code"
                      className="link-text"
                      target="_blank"
                    >
                      What's a QR Code?
                    </a>
                  </span>
                </div>
                <div>
                  <Button className="close" onClick={() => setShowTip(false)}>
                    <span aria-hidden="true">×</span>
                  </Button>
                </div>
              </div>
            ) : null}
            <div className="qr-code d-flex flex-column align-items-center">
              <br />
              <QRCode
                // logoImage={rat}
                // logoWidth={90}
                // logoHeight={90}
                size={200}
                // imageSettings = {qrCodeImage}
                value={url}
              />
              <br />
              <h2>HiroRat.com/</h2>
            </div>
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className="px-3"
                href="/dashboard"
              >
                Back to Dashboard
              </Button>
            </div>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

MyQRCode.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MyQRCode;
