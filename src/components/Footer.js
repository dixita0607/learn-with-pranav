import React from 'react'

import youtube from '../img/social/youtube.svg';
import whatsapp from '../img/social/whatsapp.svg';
import telegram from '../img/social/telegram.svg';
import instagram from '../img/social/instagram.svg';
import gmail from '../img/social/gmail.svg';
import facebook from '../img/social/facebook.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-12 social" style={{padding: '1.5em'}}>
                <section className="section">
                  <a title="youtube"
                     href="https://www.youtube.com/channel/UCKxrMleG0D352dCvTQajD1w?view_as=subscriber?sub_confirmation=1"
                     target="_blank">
                    <img
                      className="fas fa-lg"
                      src={youtube}
                      alt="YouTube"
                      style={{ width: '1.4em', height: '1.4em' }}
                    />
                  </a>
                  <a title="whatsapp" href="https://wa.me/918319787329" target="_blank">
                    <img
                      className="fas fa-lg"
                      src={whatsapp}
                      alt="Whatsapp"
                      style={{ width: '1.4em', height: '1.4em' }}
                    />
                  </a>
                  <a title="telegram" href="https://t.me/learnwithpranav" target="_blank">
                    <img
                      src={telegram}
                      alt="Telegram"
                      style={{ width: '1.4em', height: '1.4em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/ca_pranav/" target="_blank">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1.4em', height: '1.4em' }}
                    />
                  </a>
                  <a title="email" href="mailto:capranavpopat@gmail.com" target="_blank">
                    <img
                      src={gmail}
                      alt="Email"
                      style={{ width: '1.4em', height: '1.4em' }}
                    />
                  </a>
                  <a title="facebook" href="https://www.facebook.com/learnwithpranav" target="_blank">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1.4em', height: '1.4em' }}
                    />
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
