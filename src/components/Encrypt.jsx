import CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { useState } from 'react';

function Encrypt() {
    const [text, setText] = useState("");

    const [encryptedData, setEncryptedData] = useState("");
    const [decryptedData, setDecryptedData] = useState("");

    const secretPass = "@cmendoza022002";

    const encryptData = () => {
        const data = CryptoJS.AES.encrypt(
            JSON.stringify(text),
            secretPass
        ).toString();
        setEncryptedData(data);
    };

    const decryptData = () => {
        const bytes = CryptoJS.AES.decrypt(text, secretPass);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setDecryptedData(data);
    };

    const copyToClipboard = () => {
        const text = document.getElementById('clipboard');
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        Swal.fire({
            title: 'Copied',
            text: 'Message encrypted to clipboard',
            icon: 'success',
            confirmButtonText: 'Cool'
        });
        setEncryptedData("");
    };

    const encryptClick = () => {
        if (!text) return;
        encryptData();
    };
    const decryptClick = () => {
        if (!text) return;
        decryptData();
    }  
    return (
        <>
            <section className='section-options'>
                <textarea
                    className="text-to-encrypt"
                    cols="30"
                    rows="10"
                    value={text}
                    onChange={({ target }) => {
                        setText(target.value);
                    }}
                    name="text"
                    type="text"
                    placeholder="Insert Text"></textarea>

                <div>
                    <h6 className="information">Only lowercase letters and no accents</h6>
                </div>
                <div className="buttons">
                    <button className="btn-encrypt" onClick={encryptClick}>Encrypt</button>
                    <button className="btn-decrypt" onClick={decryptClick}>Decrypt</button>
                </div>
            </section>
            <section className="section-encryted">
                {decryptedData || encryptedData ? (
                    <textarea
                        id='clipboard'
                        className="menssage-encrypted"
                        cols="20"
                        rows="10"
                        value={encryptedData ? encryptedData : decryptedData ? decryptedData : null}></textarea>
                ) : <textarea
                    className="menssage-encrypted"></textarea>}
                <div>
                    <button className="copy-message" onClick={copyToClipboard}>Copy</button>
                </div>
            </section>
        </>
    )
}

export default Encrypt
