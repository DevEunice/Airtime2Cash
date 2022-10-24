import './twoFA.scss';
import { useState, useRef } from 'react';
import { FormInput, Button } from '..';
import { toast } from 'react-toastify';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';

const TwoFAModal = ({ close }) => {
  const modalRef = useRef();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const evalClose = (e) => {
    if (modalRef.current.contains(e.target)) return
    close();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/admin/authenticate`, {
      sessionCode: code
    }).then(res => {
      if (res.status === 200) {
        toast.success("Authenticated!");
        close();
      }
    }).catch(err => {
      toast.error("2FA Code is invalid. Make sure to enter it immediately after logging in");
      navigate('/login')
    })
  }

  return (
    <div className='overlay' onClick={evalClose}>
      <div className='twoFAModal' ref={modalRef}>
        <h2 className='modalHeading'>2 Factor Authentication</h2>
        <form className='modalForm' onSubmit={handleSubmit}>
          <FormInput label="Enter the code sent to your email/phone" placeholder="eg. 000000" handleChange={(e) => {setCode(e.target.value)}} />
          <Button type="submit">Confirm</Button>
        </form>
      </div>
    </div>
  )
}

export default TwoFAModal;