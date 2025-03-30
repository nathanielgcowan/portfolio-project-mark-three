import React from 'react'

interface ModalProps {
  modalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ modalOpen}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal model-box relative">
      <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
        x
      </label>
      <h3 className="text-lg font-bold">
        Congratulations random Internet user!
      </h3>
        <p className='py-4'>
          You've been selected for a change to get one year of subscription to use Wikipedia for free!
      </p>
      </div>
    </div>
  )
}

export default Modal
